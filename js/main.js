import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(i) {
    // do something
    game.makeMove(i); // make a move 
    gameView.updateBoard(game);  // update board
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);