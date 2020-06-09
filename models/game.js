let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let gameSchema = new Schema({
    boardState: {type: [Number], default: [0,0,0,0,0,0,0,0,0]},
    Xplayer: String,
    Oplayer: String
});

let Game = mongoose.model("Game", gameSchema);

module.exports = Game;