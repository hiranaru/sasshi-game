import { useState } from 'react'

export default function App() {
  const [screen, setScreen] = useState('start') // 'start', 'scene', 'result'
  const [ending, setEnding] = useState(null)

  // 選択肢を選んだときの処理
  const handleChoice = (choice) => {
    if (choice === '気づいた') {
      setEnding('カラーの世界が広がった')
    } else {
      setEnding('モノクロのままだった')
    }
    setScreen('result')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {screen === 'start' && (
        <div style={{ textAlign: 'center' }}>
          <h1>察してゲーム</h1>
          <p>気付けるかな？相手の気持ち。</p>
          <button onClick={() => setScreen('scene')}>ゲームスタート</button>
        </div>
      )}

      {screen === 'scene' && (
        <div>
          <h2>Scene: バスの中</h2>
          <p>
            あなたは広いスペースに立っている。ベビーカーを押した親子が近づいてくるが、
            あなたは気づいていないふりをしてスマホを見ている。
          </p>
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => handleChoice('気づいた')}>さっとスペースを空ける</button>
            <button onClick={() => handleChoice('気づかない')}>スマホを見続ける</button>
          </div>
        </div>
      )}

      {screen === 'result' && (
        <div style={{ textAlign: 'center' }}>
          <h2>結果</h2>
          <p>{ending}</p>
          <button onClick={() => setScreen('start')}>もう一度プレイ</button>
        </div>
      )}
    </div>
  )
}
