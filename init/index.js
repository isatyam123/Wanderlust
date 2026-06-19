const path = require("path");

require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect(process.env.MONGOATLAS_URL);
    console.log("Connected to DB");
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a35b1d4429508f9af08c6dc",
    }));

    await Listing.insertMany(initData.data);

    console.log("Data was initialized");
};

main()
    .then(async () => {
        await initDB();
        await mongoose.connection.close();
        console.log("Connection closed");
        process.exit(0);
    })
    .catch(async (err) => {
        console.log(err);
        await mongoose.connection.close();
        process.exit(1);
    });