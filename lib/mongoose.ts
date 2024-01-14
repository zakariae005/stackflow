import mongoose from 'mongoose'

let isConnected: Boolean = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (!process.env.MONGODB_URL) {
        return console.log('MISSING env');
        
    }

    if (isConnected) {
        return console.log('DATABASE IS ALREADY CONNECTED');
        
    }
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'stackDevFlow'
        })

        isConnected = true

        console.log('DATABASE IS CONNECTED');
        
    } catch (error) {
        console.log(error);
    }
}