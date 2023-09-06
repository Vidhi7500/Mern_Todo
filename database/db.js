import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {
    //const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.147rv0f.mongodb.net/?retryWrites=true&w=majority
//`;

    const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8uitzd4.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', ()=>{
        console.log('Database connected successfully');
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });

    mongoose.connection.on("error", () => {
      console.log("error while connecting ", error.message);
    });
}

export default Connection;
