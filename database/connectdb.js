import mongoose from "mongoose"

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connect Database OK 👍🫵');
} catch (error) {
    console.error('Error connection 😒');
}