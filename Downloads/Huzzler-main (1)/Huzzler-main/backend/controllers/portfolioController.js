const Portfolio = require("../models/Portfolio");

// ➕ Add a new portfolio
exports.addPortfolio = async (req, res) => {
  try {
    const { userEmail, projectTitle, projectDescription, skills, tools, projectURL } = req.body;

    const newPortfolio = await Portfolio.create({
      userEmail,
      projectTitle,
      projectDescription,
      skills: skills ? skills.split(",").map(s => s.trim()) : [],
      tools: tools ? tools.split(",").map(t => t.trim()) : [],
      projectURL,
    });

    res.status(201).json(newPortfolio);
  } catch (err) {
    console.error("Add Portfolio Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🧠 Get portfolios for a specific user
exports.getUserPortfolios = async (req, res) => {
  try {
    const { email } = req.params;
    const portfolios = await Portfolio.find({ userEmail: email });
    res.status(200).json(portfolios);
  } catch (err) {
    console.error("Get Portfolios Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ❌ Delete a portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({ message: "Portfolio deleted" });
  } catch (err) {
    console.error("Delete Portfolio Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
