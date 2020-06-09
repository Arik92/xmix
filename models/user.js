let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    score: {type: Number, default: 0}
});

let Game = mongoose.model("Game", gameSchema);

module.exports = Game;