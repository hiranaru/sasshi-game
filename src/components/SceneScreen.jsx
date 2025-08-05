import { useState } from "react";
import dummyScene from "../dummy-scene.jpg";
import "../styles/SceneScreen.css";

export default function SceneScreen({ onNext }) {
  const [step, setStep] = useState(1); // 1:導入 → 2:画像表示 → 3:正解押し待ち → 4:解説

  const handleOverlayClick = () => {
    if (step === 1) setStep(2);
  };

  const handleAnswerClick = () => {
    if (step === 2) setStep(3);
  };

  const handleNext = () => {
    onNext(); // App.jsx に渡す
  };

  return (
    <div className="scene-screen">
     <img
  src="/dummy-scene.jpg"
  alt="Scene"
  className={`scene-image ${showImage ? 'show' : ''}`}
/>

      {step === 1 && (
        <div className="overlay intro" onClick={handleOverlayClick}>
          <p>バスの中、あなたは座席に座っている。</p>
          <p>次の停留所で、何かに気づけるかな？</p>
          <p>画面をタップして進んでください。</p>
        </div>
      )}

      {step === 2 && (
        <div className="clickable-area" onClick={handleAnswerClick}></div>
      )}

      {step === 3 && (
        <div className="overlay explanation">
          <p>そこはベビーカー置き場だよ。</p>
          <p>ベビーカーの人を優先してあげてね。</p>
          <button onClick={handleNext}>次へ</button>
        </div>
      )}
    </div>
  );
}
