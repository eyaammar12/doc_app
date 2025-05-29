import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
export const updateDoctor = async (req, res) => {
const id = req.params.id;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res
            .status(200)
            .json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
}


export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
        try {
            await Doctor.findByIdAndDelete(
                id,
            );
            res
                .status(200)
                .json({
                success: true,
                message: "Successfully deleted",
                
            });
        } catch (err) {
            res.status(500).json({ success: false, message: "Failed to delete" });
        }
}


export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
        try {
            const doctor = await Doctor.findById(
                id,
            ).populate("reviews").select("-password"); // we should not sent sensitive data like password;
            res
                .status(200)
                .json({
                success: true,
                message: "doctor found",
                data: doctor,
            });
        } catch (err) {
            res.status(404).json({ success: false, message: "user not found" });
        }
}

export const getAllDoctor = async (req, res) => {
    try {

        // filter doctor fi recherche (find a doctor page)
        const { query } = req.query;  
        let doctors;  
        if (query) {  
        doctors = await Doctor.find({  
            isApproved: "approved",  
            $or: [  
                { name: { $regex: query, $options: "i" } },  
                { specialization: { $regex: query, $options: "i" } },  
            ],  
        }).select("-password");  
        } else {  
            doctors = await Doctor.find({ isApproved: "approved" }).select(  
            "-password"  
            );  
        }




        res.status(200).json({
            success: true,
            message: "doctors found",
            data: doctors,
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({ success: false, message: "doctors not found" });
    }
};




export const getDoctorProfile = async (req, res) => {
    try {
        // Use req.userId instead of req.doctorId
        const doctor = await Doctor.findById(req.userId);

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        const { password, ...rest } = doctor._doc; // Exclude password from the response
        const appointments = await Booking.find({ doctor: doctor._id });

        res.status(200).json({
            success: true,
            message: 'Profile info is getting',
            data: { ...rest, appointments },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};
