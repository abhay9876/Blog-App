const express = require('express')
const router = express.Router();
const {login, signup, logout, passwordReset} = require('../Controllers/authController')

router.post('/login',login)
router.post('/signup',signup)
router.post('/logout',logout)
router.post('/reset-password',passwordReset)

module.exports=router
