import express from 'express';
import {body} from 'express-validator';
import {registerUser, loginUser, getUserProfile, logoutUser} from '../controllers/userController.js';
import {authUser} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('fullName.firstName'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters')
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters')
],loginUser)

router.get('/profile',authUser,getUserProfile)

router.get('/logout',authUser,logoutUser)

export default router;