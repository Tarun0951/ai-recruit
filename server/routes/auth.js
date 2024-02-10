const express=require('express');
const router=express.Router();
const {signup,login,profile}=require('../controllers/auth');



router.post('/signup',signup);
router.post('/login',login);
router.get('/profile',profile);


module.exports=router;
