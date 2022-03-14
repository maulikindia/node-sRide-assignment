const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URL}`,{}).then(db => console.log("db connection successful")).catch(err => console.log("db connection error",err))
