
import "dotenv/config";
import express, { json, static as expressStatic } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { log } from "console";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import authRoutes from "./routes/auth.js";
import portfolioRoutes from "./routes/portfolio.js";
import serviceRoutes from "./routes/service.js";
import accountDetailsRoutes from "./routes/accountDetails.js";
import WorkRouter from "./routes/WorkRouter.js";
import ClientRouter from "./routes/ClientWork.js";
import JobProfileRouter from "./routes/JobProposal.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(json({ limit: "10mb" }));
app.use("/uploads", expressStatic(join(__dirname, "uploads")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user._id ?? user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    done(null, user || null);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:5000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const googleId = profile.id;
        const firstName = profile.name?.givenName;
        const lastName = profile.name?.familyName;
        const avatarUrl = profile.photos?.[0]?.value;

        let user = await User.findOne({ $or: [{ googleId }, { email }] });

        if (user) {
          if (!user.googleId) {
            user.googleId = googleId;
            user.avatarUrl = user.avatarUrl || avatarUrl;
            await user.save();
          }
          return done(null, user);
        }

        const newUser = await User.create({
          firstName,
          lastName,
          email,
          googleId,
          avatarUrl,
          role: "freelancer",
        });

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);


app.get("/api/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
    session: true,
  }),
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.user.email });
      const encodedEmail = encodeURIComponent(user.email);

      if (!user.details1 || !(user.details1.expertise?.length > 0)) {
        return res.redirect(`http://localhost:5173/details1?email=${encodedEmail}`);
      }

      if (!user.details2 || !user.details2.professionalTitle) {
        return res.redirect(`http://localhost:5173/buildprofile?email=${encodedEmail}`);
      }

      res.redirect(`http://localhost:5173/dashboard?email=${encodedEmail}`);
    } catch (err) {
      console.error("Google callback redirect error:", err);
      res.redirect("http://localhost:5173/login");
    }
  }
);

// =======================
// 📦 NORMAL ROUTES
// =======================
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/users", accountDetailsRoutes);
app.use("/api/Work",WorkRouter);
app.use("/api/ClientWork",ClientRouter)
app.use("/api/jobProposal",JobProfileRouter)

// =======================
// 🧑‍💼 ACCOUNT DETAILS CRUD (your new code)
// =======================


// ➕ Create new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    res.status(201).json({ message: "Account created successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// 📋 Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Get single user
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update user
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Account updated successfully", updatedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ❌ Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================
// 🧠 ENV VALIDATION
// =======================
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI missing in .env!");
}
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.warn("⚠️  Google OAuth ENV missing. Check .env file!");
}

// =======================
// 🧩 DATABASE + SERVER START
// =======================
const PORT = process.env.PORT || 5000;
const rawMongoUri = process.env.MONGO_URI;

console.log("🔗 Connecting to MongoDB...");
console.log("MONGO_URI (raw):", JSON.stringify(rawMongoUri));

if (!rawMongoUri) {
  console.error("❌ No MONGO_URI found in .env file!");
  process.exit(1);
}

mongoose
  .connect(rawMongoUri.trim())
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    const server = app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );

    // 🧠 Handle if port 5000 is already in use
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`⚠️ Port ${PORT} already in use, trying 5001...`);
        server.listen(5001);
      } else {
        console.error("Server error:", err);
      }
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
