const { default: mongoose} = require('mongoose');
require('dotenv').config();

const db = process.env.MONGO_URI;

const connect = async () => {
    await mongoose.connect(db, {useNewUrlParser: true})
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(`Error while connecting database: ${err}`)
    })
}

module.exports = connect;