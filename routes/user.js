import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//Sign Up Route
router.post("/signup", async (req, res) => {
  const { username, tag, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }
  if(username === "" || tag==="" || email==="" || password==="" ){
    return res.json({ message: "fields are empty" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    tag,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return res.json({ status: true, message: "record registered" });
});



//Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "user is not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "password is incorrect" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.KEY, {
      expiresIn: "1h",
    });
    //res.status(200).send({ token });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    
    return res.json({
      status: true,
      token: token,
      message: "login successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

//Forgot-Password Route
router.post("/forgot-password", async (req, res) => {
  //to check registered email
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gaurprahlad776@gmail.com",
        pass: "Prahlad@0711",
      },
    });

    var mailOptions = {
      from: "gaurprahlad776@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// For Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

// GET all user data
router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({
      success: true,
      message: "got users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in getting all users",
      error,
    });
  }
});

//GET single user data when Login
router.get("/getuser", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.KEY);
    const userId = decodedToken.userId;
    const user = await User.findById(userId);
    res.status(200).send({
      name: user.username,
      email: user.email,
      success: true,
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

export { router as UserRouter };
