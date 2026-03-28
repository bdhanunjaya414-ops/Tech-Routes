require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log('Signup email received:', email);
    console.log('Generated OTP:', otp);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      otp,
      otpExpires: Date.now() + 300000,
      verified: false
    });

    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Tech Routes - Verify Your Account',
      html: `
        <div style="font-family:Arial; background:#f4f4f4; padding:30px;">
          <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden;">
            <div style="background:#0f172a; color:white; text-align:center; padding:25px;">
              <h1>Tech Routes 🚀</h1>
              <p>Account Verification</p>
            </div>

            <div style="padding:30px;">
              <h2>Hello ${name},</h2>
              <p>Thank you for creating your Tech Routes account.</p>
              <p>Your OTP for verification is:</p>

              <div style="background:#2563eb; color:white; font-size:28px; font-weight:bold; text-align:center; padding:15px; border-radius:10px;">
                ${otp}
              </div>

              <p style="margin-top:20px;">OTP valid for 5 minutes.</p>

              <p>Best regards,<br><strong>Tech Routes Team</strong></p>
            </div>
          </div>
        </div>
      `
    });

    console.log('Mail sent successfully');

    res.json({
      message: 'OTP sent successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Signup failed'
    });
  }
});

router.post('/verify', async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: 'User not found'
      });
    }

    console.log('Verify email:', email);
    console.log('Entered OTP:', otp);
    console.log('Saved OTP:', user.otp);

    if (user.otp.toString().trim() !== otp.toString().trim()) {
      return res.json({
        message: 'Invalid OTP'
      });
    }

    if (user.otpExpires < Date.now()) {
      return res.json({
        message: 'OTP expired'
      });
    }

    user.verified = true;
    user.otp = '';
    user.otpExpires = null;

    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Tech Routes - Account Verified',
      html: `
        <div style="font-family:Arial; background:#f4f4f4; padding:30px;">
          <div style="max-width:650px; margin:auto; background:white; border-radius:12px; overflow:hidden;">
            <div style="background:#16a34a; color:white; text-align:center; padding:25px;">
              <h1>Welcome to Tech Routes 🎉</h1>
            </div>

            <div style="padding:30px;">
              <h2>Hello ${user.name},</h2>

              <p>Your account has been successfully verified.</p>

              <p>Now you can explore our courses:</p>

              <ul>
                <li>Java Full Stack Development</li>
                <li>Python Programming</li>
                <li>Frontend Development</li>
                <li>Backend APIs</li>
                <li>AI & LLM Learning</li>
              </ul>

              <p>
                Tech Routes helps students and job seekers build practical technical skills and career confidence.
              </p>

              <p>Best regards,<br><strong>Tech Routes Team</strong></p>
            </div>
          </div>
        </div>
      `
    });

    res.json({
      message: 'Verification successful'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Verification failed'
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: 'User not found'
      });
    }

    if (!user.verified) {
      return res.json({
        message: 'Verify email first'
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({
        message: 'Wrong password'
      });
    }

    res.json({
      message: 'Login successful'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Login failed'
    });
  }
});

module.exports = router;