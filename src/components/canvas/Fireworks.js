import { useState } from 'react';
import Canvas from '../Canvas';

const Fireworks = ({ canvasHeight, canvasWidth}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const draw = (ctx, frameCount) => {
    const { canvas } = ctx;
    const { width, height } = canvas;

    let yPos = Math.max(position.y - Math.sqrt(frameCount * 5000), 50)

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(position.x, yPos, 5, 0, 2 * Math.PI)
    ctx.fill()
  }

  const options = {}

  const onClick = (e) => {
    console.log('e', e);
    setPosition(({x: e.clientX, y: e.clientY}));
  }

  return (
    <Canvas draw={draw} options={options} height={canvasHeight} width={canvasWidth} onClick={onClick} />
  );
}

export default Fireworks;
