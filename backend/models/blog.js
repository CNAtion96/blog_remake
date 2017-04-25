"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    },
});

module.exports = mongoose.model('blog', blogSchema);