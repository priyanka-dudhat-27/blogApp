const { validationResult } = require("express-validator");
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


exports.registerUser = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(404)
        .json({ success: false, message: errors.array()[0]?.msg });
    }

    const existingUser = await userModel.findOne({ email: email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(404).json({ message: "user already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User register successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Email not Registered" });
    }

    const isMatch=bcrypt.compareSync(password,user.password);
    if(!isMatch){
        return res.status(401).json({success:false,message:"Invalid Credential"})
    }

    var token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);


    res.status(200).json({success:true,message:"Login Successfully",token})

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error"});
  }
};

exports.getprofile=async(req,res)=>{
    try{
        const user=req.user;

        res.json({success:true,message:"Details fetched",user})
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error"});
      }
}

exports.getAllUser = async (req, res) => {
  const users = await userModel.find();
  res.json({ users: users });
};
