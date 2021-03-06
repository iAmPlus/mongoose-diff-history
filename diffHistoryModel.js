const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema(
    {
        collectionName: String,
        collectionId: String,
        diff: {},
        user: {},
        reason: String,
        version: { type: Number, min: 0 }
    },
    {
        timestamps: true
    }
);

module.exports = { model: mongoose.model('History', historySchema) };
