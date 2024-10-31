const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure genre names are unique
    },
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
