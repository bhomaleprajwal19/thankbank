"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({username: to_username})
    const secret = "Yid9QHjmOOcsn9qodgYfaOak"

    var instance = new Razorpay({ key_id:"rzp_test_3pjg23E0YTgEYu", key_secret: secret })



    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}


export const fetchuser = async (username) => {
    await connectDb()
    let user = await User.findOne({ username: username }).lean()
    if (user && user._id) {
        user._id = user._id.toString(); // Convert _id to a string
    }
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    try {
        await connectDb();  // Ensure you connect to the database
        
        // Directly use data instead of converting it with Object.fromEntries()
        let ndata = { ...data };
        
        // If the username is being updated, check if the new username is available
        if (oldusername !== ndata.username) {
            let u = await User.findOne({ username: ndata.username });
            if (u) {
                return { error: "Username already exists" };  // Return an error if username already exists
            }   
        }

        // Check if the user exists by email before updating
        let existingUser = await User.findOne({ email: ndata.email });
        if (!existingUser) {
            return { error: "User not found" }; // Return an error if user doesn't exist
        }

        // Update the user profile with the new data
        await User.updateOne({ email: ndata.email }, ndata);

        // If the username was changed, update all payments related to the old username
        if (oldusername !== ndata.username) {
            await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
        }

        return { success: true };  // Return success if the update was successful
    } catch (error) {
        console.error("Error updating profile: ", error);  // Log the error for debugging
        return { error: "Failed to update profile" };  // Return a generic error message
    }
};


