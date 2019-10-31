const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayersSchema = new Schema({
    name: {
        type: String
    },
    age:{
        type: Number,
        default: null
    }

});

const Players = mongoose.model("Players", PlayersSchema);

module.exports = Players;