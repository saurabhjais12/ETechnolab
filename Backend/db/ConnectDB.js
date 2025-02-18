const mongoose = require("mongoose")

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // console.log("DB Connected");
    } catch (err) {
        console.log(err)
    }
}

module.exports = ConnectDB;