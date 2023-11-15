import mongoose from "mongoose"


export const connectDb = async () => {
    try {
        const {connection} = await mongoose.connect("mongodb+srv://rohit:rohit@cluster0.pd4e7cx.mongodb.net/?retryWrites=true&w=majority")
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}