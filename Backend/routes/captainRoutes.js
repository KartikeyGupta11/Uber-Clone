import express from 'express';
import {body} from 'express-validator';
import {registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain} from '../controllers/captainController.js';
import {authCaptain} from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('fullname.firstName').isLength({min:3}).withMessage('First Name must be of atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
    body('vehicle.model').isLength({min:3}).withMessage('Model must be of atleast 3 characters'),
    body('vehicle.vehicleType').isIn(['Sedan','HatchBack','SUV','Bike','Auto']).withMessage('Vehicle Type must be of atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of atleast 3 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be of atleast 1'),
], registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
], loginCaptain)

router.get('/profile',authCaptain,getCaptainProfile);

router.get('/logout',authCaptain, logoutCaptain);

export default router;