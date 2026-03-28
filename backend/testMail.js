require('dotenv').config();
const nodemailer = require('nodemailer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function sendTestMail(userEmail) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const otp = Math.floor(100000 + Math.random() * 900000);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Tech Routes OTP Test',
      text: `Your OTP is ${otp}`
    });

    console.log('Mail sent:', info.response);
    console.log('OTP:', otp);
    console.log('Sent to:', userEmail);

  } catch (error) {
    console.log('Mail error:', error);
  }

  rl.close();
}

rl.question('Enter user email: ', (email) => {
  sendTestMail(email);
});