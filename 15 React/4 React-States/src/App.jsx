import './App.css'
import { Counter } from './1 NormalCounter'
import StateCounter from './2 StateCounter'
import LikeButton from './3 LikeButton'

function App() {
  return (
    <>
      <h1>State in React</h1>
      <Counter />
      <StateCounter />
      <br />
      <LikeButton/>
    </>
  )
}

export default App
