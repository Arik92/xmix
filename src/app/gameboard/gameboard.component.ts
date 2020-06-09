import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {
  boardState: string[] = [];

  constructor() { }

  ngOnInit(): void {
    //TODO: get parameters for gameID and fetch it's state
    this.createNewGame();
    this.updateGameState();
  }
  createNewGame() {
    for (let i=0;i<9;i++) {
      this.boardState[i] = 'A';
    }    
  }

  isFillable(index):boolean {
    console.log('index is ', index);
    return !(this.boardState[index] === 'A');

  }
  updateGameState() {
    //gets the gameState 
  }
  handleBoardInput() {
    console.log('handle change trigger! ');
    // this.boardState[index] = 
  }

}
