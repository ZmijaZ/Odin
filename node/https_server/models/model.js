const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {collection : ''});

const User = new mongoose.model('Passport', Schema)

async function getAllUsers(){

    const data = await User.find();
    if(data.length === 0)
        console.log("No data !");

    return data;
}

module.exports = {
    getAllUsers
}