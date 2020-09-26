import React from 'react'
import './App.css'

function App() {
  const board = [...Array(10)].map(() => [...Array(10)].map(() => 0))

  const board2 = [
    ...Array(10)
      .fill(<div className='board-row'></div>)
      .map(() => new Array(10).fill(<div className='board-cell'></div>)),
  ]

  console.log(board)
  return (
    <div className='App'>
      <div>
        <button>Turn Right</button>
        <button>Move Forward</button>
      </div>
      <div className='board-box'>{board}</div>
      <div>{board2}</div>
    </div>
  )
}

export default App
