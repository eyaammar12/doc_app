import express from "express";  
import {  
    getSingleDoctor,
    getAllDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorProfile,  
} from "../Controllers/doctorController.js";  

import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from './review.js'

const router = express.Router();  

// nested route
router.use('/:doctorId/reviews', reviewRouter)


router.get("/:id", getSingleDoctor);  
router.get("/", getAllDoctor);  
router.put("/:id",authenticate,restrict(['doctor']), updateDoctor);  
router.delete("/:id",authenticate,restrict(['doctor']), deleteDoctor); 
router.get("/profile/me",authenticate, getDoctorProfile); //restrict(['doctor']),



export default router;