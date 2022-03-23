const mongoose = require('mongoose')
const data = require('../dev-data/data/tours-simple.json')
const tourModel = require('../models/Tour')
require('dotenv').config();

const importData = async () => await tourModel.insertMany(data);

const deleteData = async () => await tourModel.deleteMany()

const main = async () => {
    try {
        // console.log(process.env.DB_URL);
        await mongoose.connect("mongodb://localhost:27017/tour-app");
        if(process.argv[2] === "--import"){
            await importData(); 
        } else if(process.argv[2] === "--delete"){
            await deleteData();
        }
    } catch (error) {
        console.error(error);
    }
}

main();