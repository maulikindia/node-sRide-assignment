const mongoose = require('mongoose');
const weatherSchema = new mongoose.Schema({
    cord: {
        type: 'object'
    },
    id: { type: 'number' }
})

module.exports = mongoose.model('weather', weatherSchema);