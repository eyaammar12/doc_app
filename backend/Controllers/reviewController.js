import Review from "../models/ReviewSchema.js";  
import Doctor from "../models/DoctorSchema.js";  
// get all reviews  
export const getAllReviews = async (req, res) => {
    try {
        const { doctorId } = req.params; // Extract doctorId
        console.log("Doctor ID received:", doctorId); // Log doctorId for debugging

        const reviews = await Review.find({ doctor: doctorId }); // Query filtered by doctorId
        console.log("Fetched reviews:", reviews); // Log the fetched reviews

        res.status(200).json({
            success: true,
            message: "Successful",
            data: reviews,
        });
    } catch (err) {
        console.error("Error fetching reviews:", err.message); // Log error details
        res.status(404).json({
            success: false,
            message: "Not found",
            error: err.message,
        });
    }
};

 
// create review  
export const createReview = async (req, res) => {
    try {
        // Ensure doctorId and userId are included in the review
        if (!req.body.doctor) req.body.doctor = req.params.doctorId;
        if (!req.body.user) req.body.user = req.userId;

        console.log("Doctor ID from params:", req.params.doctorId); // Log doctorId
        console.log("Request body before saving:", req.body); // Log the body sent

        // Create a new review
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        console.log("Saved review:", savedReview); // Log the saved review

        // Update the Doctor collection by adding the review ID to its reviews array
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id },
        });

        res.status(200).json({
            success: true,
            message: "Review submitted successfully",
            data: savedReview,
        });
    } catch (err) {
        console.error("Error creating review:", err.message); // Log the error
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
