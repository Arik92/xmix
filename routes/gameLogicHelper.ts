// 0,0,0,
// 0,0,0,
// 0,0,0
function checkRows(board) {
    if (board[0] === board[1] === board[2] && board[0] != 0){
        return board[0];
    } else if (board[3] === board[4] === board[5] && board[3] != 0){
        return board[3];
    } else if (board[6] === board[7] === board[8] && board[6] != 0){
        return board[6];
    }
    else {
        return 0;
    }
}
function checkCols(board) {
    if (board[0] === board[3] === board[6] && board[0] != 0){
        return board[0];
    } else if (board[1] === board[4] === board[7] && board[1] != 0){
        return board[1];
    } else if (board[2] === board[5] === board[8] && board[2] != 0){
        return board[2];
    } else {
        return 0;
    }
}
function checkDiag(board) {
    if (board[0] === board[4] === board[8] && board[0] != 0){
        return board[0];
    } else if (board[2] === board[4] === board[6] && board[2] != 0){
        return board[2];
    } else {
        return 0;
    }
}
function isTie(board: number[]):boolean {
    board.map(square => {
        if (square === 0) {
            return false;
        } // found at least one sqaure with empty spot
    })
    return true;
}
const determineOutcome = (gameBoard: number[]) => {
    const rows = checkRows(gameBoard);
    const cols = checkCols(gameBoard);
    const diagonals = checkDiag(gameBoard);
    if (rows === 1 || cols === 1 || diagonals === 1) {
        return 'x';
    } else if (rows === 2 || cols === 2 || diagonals === 2) {
        return 'o';
    } else {
        return isTie(gameBoard) ? 'tie':'';
    }    
}

exports.determineOutcome = determineOutcome;