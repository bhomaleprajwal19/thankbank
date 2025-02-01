import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // Use process.env.MONGODB_URI for flexibility and security
        const conn = await mongoose.connect("mongodb+srv://ray:5BFfop3AXZqwNlw6@passkeep.fkpov.mongodb.net/thankbank", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit process with failure
    }
};

export default connectDb;
