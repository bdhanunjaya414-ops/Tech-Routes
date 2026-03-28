const express = require("express");
const router = express.Router();
const User = require("../models/User");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/dashboard", async (req, res) => {
  try {
    const email = req.query.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const avg = user.progress?.averageScore || 88;

    res.json({
      user,
      performanceData: [
        { name: "Week 1", score: avg - 3 },
        { name: "Week 2", score: avg - 5 },
        { name: "Week 3", score: avg + 2 },
        { name: "Week 4", score: avg }
      ]
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.post("/upload-photo", upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.json({
        message: "No file uploaded"
      });
    }

    await User.findOneAndUpdate(
      { email: req.body.email },
      {
        photo: req.file.filename
      }
    );

    res.json({
      message: "Uploaded successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;