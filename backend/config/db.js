import mongoose from 'mongoose';

const connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB!!");
    }).catch((err) => {
        throw err;
    });
}

export default connect;