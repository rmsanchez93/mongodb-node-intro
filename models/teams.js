const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeamsSchema = new Schema({
    teamName: {
        type: String
    },
    players: []
});

const Teams = mongoose.model("Teams", TeamsSchema);

module.exports = Teams;