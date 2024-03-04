const express=require('express');
const { registerUser, getAllUser, loginUser, getprofile } = require('../controllers/user_controller');
const { registerInputValidation } = require('../middlewares/inputvalidation.middlewares');
const { body } = require('express-validator');
const router=express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',registerInputValidation,registerUser)
router.post('/login',loginUser)
router.get('/profile',authMiddleware,getprofile)
router.get('/all',getAllUser)

module.exports=router;