// src/components/SceneScreen.jsx
import '../../styles/SceneScreen.css'

export default function SceneScreen({ onCorrect }) {
  return (
    <div className="scene-screen">
      <img src="/dummy-scene.jpg" alt="シーン画像" className="scene-image" />
      <button
        className="hit-area"
        onClick={onCorrect}
        aria-label="正解エリア"
      ></button>
    </div>
  )
}
