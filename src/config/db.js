const {connect, set} = require("mongoose");

const connectDb = async() => {
    try {
        set("strictQuery", true);
        const {connection: {host}} = await connect(process.env.MONGO_URL);
        console.log("mongoose connected with "+host);

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;