import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import SceneScreen from "./components/SceneScreen";

export default function App() {
  const [screen, setScreen] = useState("title");

  return (
    <>
      {screen === "title" && <TitleScreen onStart={() => setScreen("scene")} />}
      {screen === "scene" && <SceneScreen onNext={() => console.log("次のシーンへ")} />}
    </>
  );
}
