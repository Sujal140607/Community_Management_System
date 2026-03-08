const express = require("express")
const authRouter = express.Router()
const authController = require("../controller/auth.controller")
const validateEmail = require("../middlewares/validateEmail")

/**
 * - POST /api/auth/register
 * - for the Register
 */
authRouter.post("/register", validateEmail, authController.registerController)

/**
 * - POST /api/auth/login
 * - for the Login
 */
authRouter.post("/login" , authController.loginController)

module.exports = authRouter