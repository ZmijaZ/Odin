import { h1, board } from "./game.js";

function GameBoard() {
  let winner = "";

  const tiles = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function EmptyTiles(tiles) {
    for (let x of tiles) if (x !== "O" && x !== "X") return true;

    return false;
  }

  function checkWinner(player) {
    if (
      (tiles[0] === tiles[1] && tiles[1] === tiles[2]) ||
      (tiles[3] === tiles[4] && tiles[4] === tiles[5]) ||
      (tiles[6] === tiles[7] && tiles[7] === tiles[8]) ||
      (tiles[0] === tiles[3] && tiles[3] === tiles[6]) ||
      (tiles[1] === tiles[4] && tiles[4] === tiles[7]) ||
      (tiles[2] === tiles[5] && tiles[5] === tiles[8]) ||
      (tiles[0] === tiles[4] && tiles[4] === tiles[8]) ||
      (tiles[2] === tiles[4] && tiles[4] === tiles[6])
    ) {
      winner = player;
      console.log(player + " won !");
      h1.textContent = player + " won !";

      return 1;
    } else if (!EmptyTiles(tiles)) {
      winner = "tie";
      console.log("TIE!");
      h1.textContent = "TIE";

      return 2;
    } else {
      console.log("Still no winners " + tiles);
      return 0;
    }
  }

  return {
    checkWinner,
    tiles,
  };
}

export { GameBoard };
