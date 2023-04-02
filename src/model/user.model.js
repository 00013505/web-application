import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;