import {Field} from "~/components/gamefield";

type GameTypes = {
     currentPlayer: 'X' | 'O' | null;
     outerField: Field<string>;
     innerField: Field<Field<string>>;
}

let currentPlayer: GameTypes['currentPlayer']

// TODO: gameState field only saves the last field in which a player made a move - so a dimension is missing
let gameState: {currentPlayer: GameTypes['currentPlayer'], field: GameTypes['innerField']} | null = null;

const determineCurrentPlayer = () => {
    if (!currentPlayer) {
        currentPlayer = Math.random > 0.5 ? 'X' : 'O';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
    console.log(`Current player is ${currentPlayer}`);
    return currentPlayer;
}

function initializeGameState(): {currentPlayer: GameTypes['currentPlayer'], field: GameTypes['innerField']} {
    console.log("Initializing game");
    gameState = {currentPlayer: determineCurrentPlayer(), field: new Field(() => new Field(() => '_'))};
    return gameState;
}

function updateGameState(field) {
    console.log("Updating game state");
    gameState = {currentPlayer: determineCurrentPlayer(), field};
    console.log(gameState);
    return gameState;
}

export {initializeGameState, updateGameState, gameState};
