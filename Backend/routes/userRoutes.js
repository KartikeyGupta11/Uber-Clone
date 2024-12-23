import express from 'express';
import {body} from 'express-validator';
import {registerUser, loginUser} from '../controllers/userController.js';

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

export default router;