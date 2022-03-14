
const express = require('express');
const app = express();
const moment = require('moment');
const axios = require('axios');
require('dotenv').config()
require('./config/db')
const weatherModel = require('./models/weather')

//Get API to return response from the weather API based on date is prime or not
app.get('/api/weather', async (req, res) => {
    try {
        //Check if current date is prime or not
        const day = moment().format('D')
        const dateInNumber = 13;
        let isPrimeDate = true;
        for (let i = 2; i < dateInNumber; i++) {
            if (dateInNumber % i == 0) {
                isPrimeDate = false;
                break;
            }
        }

        if (isPrimeDate) {
            //Get data from open weather API
            const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&&appid=${process.env.WEATHER_API_KEY}`)
            const {coord,id} = data.data;
            await weatherModel.create({cord:coord,id});
            return res.status(200).json({ msg: "Weather details fetched successfully", weatherData: data.data })
        } else {
            return res.status(400).json({ msg: "Date is not prime so you can't request the data" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Failed to fetch weather data", err: error.message });
    }
})


//Listen server
const port = 3000;
app.listen(port)

module.exports = app;