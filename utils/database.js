import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB já está conectado.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "srkz",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB conectado.')
  } catch (error) {
    console.log(error);
  }
}

