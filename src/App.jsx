import { useState } from 'react'
import './App.css'
import GameBoard from './GameBoard/GameBoard'
import GameSettings from './GameSettings';
const INITIAL_BOARD_SIZE = 3;

function App() {

  const [boardSize, setBoardSize] = useState(INITIAL_BOARD_SIZE);
  const [player1PointsCounter, setPlayer1PointsCounter] = useState(0);
  const [player2PointsCounter, setPlayer2PointsCounter] = useState(0);

  console.log(boardSize);
  

  function increasePointsOfPlayerX(playerX)
  {
    switch (playerX)
    {
      case 1:
        setPlayer1PointsCounter(player1PointsCounter + 1);
        break;
      case 2:
        setPlayer2PointsCounter(player2PointsCounter + 1);
        break;
    }
  }

  function changeBoardSize(newBoardSize)
  {
    setBoardSize(newBoardSize)
  }

  return (
    <div className=''>
      
      <GameSettings player1Points={player1PointsCounter} player2Points={player2PointsCounter} onChangeBoardSize={(n)=>{setBoardSize(n)}}/>
      <GameBoard key={boardSize} boardSize={boardSize} increasePointsOfAPlayer={increasePointsOfPlayerX}/>
    </div>
  )
}

export default App
