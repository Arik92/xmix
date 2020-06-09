const express = require('express');
const router = express.Router();
const GAME = require('../models/game');
const gameHelper = require('/gameLogicHelper')

router.post('/:userName', async (req, res) => {
   // starting a new game with userName as the starting player
    try {
        let new_game = new GAME({});
        new_game.Xplayer = req.params.userName;
        const response_game = await new_game.save();
        res.send(response_game);
    } catch (err) {
        res.send(err.errmsg);
    }
 });

 router.get('/:id', async (req, res) => { 
     // get all game by id
     const gameId = req.params.id;
     try {
        const foundGame = await GAME.findById({gameId});
        res.send(foundGame);
     } catch(err) {
        console.error('error fetching a game with that id');
        res.send(err.errmsg);
     };     
 });

 router.put('/:joiningId', async (req, res) => {     
    // this route is also called when a new player is found (Oplayer)
    const gameId = req.body._id;
    const OplayerId = req.params.joiningId;
    try {
        const updatedGame = await GAME.findByIdAndUpdate(gameId, {Oplayer: OplayerId}, {new: true});
        res.send(updatedGame);
    } catch(err) {
       console.error('error fetching a game with that id' + gameId);
       res.send(err.errmsg);
    }
});
 router.put('/', async (req, res) => { 
     // update a game with said id, then determine the outcome. If one of them won,
     // update that user's score.
     // this route is also called when a new player is found (Oplayer)
     const gameId = req.body._id;
     const newGameState = req.body;
     try {
         const updatedState = await GAME.findByIdAndUpdate(gameId, newGameState, {new: true});
         const outcome = gameHelper.determineOutcome(updatedState);
         switch (outcome) {
             case 'x':
                 //update xplayer
             case 'o':
                 //update oplayer
             case 'tie':
                 //update no one. return tie state
            default: break;
         }
     } catch(err) {
        console.error('error fetching a game with that id' + gameId);
        res.send(err.errmsg);
     }
 });

module.exports = router;