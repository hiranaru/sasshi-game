import "../styles/TitleScreen.css";

export default function TitleScreen({ onStart }) {
  return (
    <div className="title-screen">
      <h1 className="title">察して。ゲーム</h1>
      <button className="start-button" onClick={onStart}>
        ゲームスタート
      </button>
    </div>
  );
}
