import React from 'react';
import Canvas from './components/Canvas'

function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.01) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  const options = {}

  return (
    <div>
      <h1>Web Art by Maxime</h1>
      <Canvas draw={draw} options={options} />
    </div>
  );
}

export default App;
