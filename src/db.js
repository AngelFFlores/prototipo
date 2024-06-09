import mongoose from 'mongoose'

const uri = "mongodb+srv://master:master92@cluster0.h0elvuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const connectDB =  async() => {
  try {
    await mongoose.connect(uri)
    console.log("Conexión mongo exitosa")
  }catch(error) {
    console.log(error)
  }
}