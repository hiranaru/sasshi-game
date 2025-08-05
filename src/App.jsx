import { useState } from 'react'
import SceneScreen from './components/SceneScreen'

export default function App() {
  const [sceneIndex, setSceneIndex] = useState(0)

  const handleCorrectTouch = () => {
    alert('察し成功！次のシーンへ進みます')
    setSceneIndex((prev) => prev + 1)
  }

  return (
    <div className="app">
      <SceneScreen key={sceneIndex} onCorrect={handleCorrectTouch} />
    </div>
  )
}
