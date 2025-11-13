

import { Schema, model } from 'mongoose';

const otpSchema = new Schema({
  code: String,
  expiresAt: Date
}, { _id: false });

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ['client', 'freelancer'], default: 'freelancer' },
  avatarUrl: String,
  otp: otpSchema,
  details1: {
    expertise: [String],
    howHeard: [String],
    location: String
  },
  details2: {
    professionalTitle: String,
    experienceLevel: String,
    currentStatus: String,
    about: String,
    skills: [String],
    tools: [String]
  }
}, { timestamps: true });

export default model('User', userSchema);
