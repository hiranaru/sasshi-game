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
         <p>バスは混雑していて、あなたはなんとなく立っている。</p>
<p>ふとした違和感。視界の隅に、何かが引っかかる。</p>
<p>…あなたは、その"違和感"に気づけるだろうか。</p>
<p>画面をタップして、周囲をよく見てみよう。</p>
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
<p>よく気づいたね。</p>
<p>そこは、ベビーカー専用のスペース。</p>
<p>今は荷物で塞がれていて、ベビーカーの親子が困っていたんだ。</p>
<p>優しさって、「気づくこと」から始まるのかもしれない。</p>
<p>次の場面では、もっと難しい「察し」が待っているよ。</p>
          <button onClick={onNext}>次へ</button>
        </div>
      )}
    </div>
  );
}
