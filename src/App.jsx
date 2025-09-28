import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Мое PWA на Vite!</h1>
        <p>Братан, это работает быстрее! ⚡</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Счетчик: {count}
          </button>
        </div>
        <p>
          Редактируй <code>src/App.jsx</code> и сохрани для обновления
        </p>
      </header>
    </div>
  )
}

export default App