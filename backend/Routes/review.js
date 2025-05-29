import express from "express";
import {
    getAllReviews,
    createReview,
} from "../Controllers/reviewController.js";
import { authenticate, restrict } from "./../auth/verifyToken.js";

const router = express.Router({ mergeParams: true }); // Allows access to parent route parameters (doctorId)

// Route: /doctors/:doctorId/reviews
router
    .route("/")
    .get(getAllReviews) // Get all reviews for the doctor
    .post(authenticate, restrict(["patient"]), createReview); // Patients can post a review

export default router;
