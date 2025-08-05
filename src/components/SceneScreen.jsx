// src/components/SceneScreen.jsx
import dummyScene from '../dummy-scene.jpg'
import '../../styles/SceneScreen.css'

export default function SceneScreen({ onCorrect }) {
  return (
    <div className="scene-screen">
      <img src={dummyScene} alt="シーン画像" className="scene-image" />
      <button
        className="hit-area"
        onClick={onCorrect}
        aria-label="正解エリア"
      ></button>
    </div>
  )
}
