import Doctor from "../models/DoctorSchema.js"
import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js"
import Stripe from 'stripe'

export const getCheckoutSession = async(req, res) => {  
    try {  
        // get currently booked doctor  
        const doctor = await Doctor.findById(req.params.doctorId)  
        const user = await User.findById(req.userId)  
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)  
        // create stripe checkout session  
        const session = await stripe.checkout.sessions.create({  
            payment_method_types: ['card'],  
            mode: 'payment',  
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`, 
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email:user.email,
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        unit_amount:doctor.ticketPrice * 100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }

                    },

                    quantity:1
                }
            ]
        }) 
        
        //create new booking 
        // create new booking  
        const booking = new Booking({  
            doctor:doctor._id,  
            user:user._id,  
            ticketPrice:doctor.ticketPrice,  
            session:session.id  
        });  
        //save our booking in db
        await booking.save()  
        res.status(200).json({success: true, message: 'Successfully paid', session})




        
    } catch (err) {  
        console.log(err)
        res.status(500).json({success: false, message: 'error creating checkout session', session})
      
    }  
}