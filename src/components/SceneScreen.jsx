import { useState } from "react";
import "../styles/SceneScreen.css";

export default function SceneScreen({ onNext }) {
  const [showIntro, setShowIntro] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);

  // 正解エリア座標（画面サイズに対して相対的）
  const correctArea = { top: "60%", left: "70%", width: "10%", height: "15%" };

  const handleImageClick = (e) => {
    if (showIntro) {
      setShowIntro(false); // 導入文タップで非表示
    }
  };

  const handleCorrectClick = (e) => {
    e.stopPropagation();
    setShowExplanation(true); // 正解エリアタップで解説表示
  };

  return (
    <div className="scene-screen">
<img
  src="/dummy-scene.jpg"
  alt="シーン"
  className="scene-image"
  onClick={handleImageClick}
/>


      {showIntro && (
        <div className="overlay intro" onClick={() => setShowIntro(false)}>
          <p>バスの中で何かに気づくことができるかな…？</p>
          <p>画面をタップして進んでね</p>
        </div>
      )}

      {!showIntro && !showExplanation && (
        <div
          className="correct-area"
          style={{
            top: correctArea.top,
            left: correctArea.left,
            width: correctArea.width,
            height: correctArea.height,
          }}
          onClick={handleCorrectClick}
        />
      )}

      {showExplanation && (
        <div className="overlay explanation">
          <p>そこはベビーカー置き場だよ。</p>
          <p>ベビーカーの人を優先してあげてね。</p>
          <button onClick={onNext}>次へ</button>
        </div>
      )}
    </div>
  );
}
