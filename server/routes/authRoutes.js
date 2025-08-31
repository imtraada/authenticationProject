import express from 'express';
import { logout, login, register, sendVerifyOtp, verifyEmail, isAutenticated, sendResetOpt, resetPassword } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

// step 1
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

// step 2
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);

// step 3
authRouter.post('/is-auth', userAuth, isAutenticated);

// step 4
authRouter.post('/send-reset-otp', sendResetOpt);
authRouter.post('/reset-password', resetPassword);

export default authRouter;