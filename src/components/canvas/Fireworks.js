import { useEffect, useState } from 'react';
import Canvas from '../Canvas';

const Fireworks = ({ canvasHeight, canvasWidth}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const draw = (ctx, frameCount) => {
    const { canvas } = ctx;
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(position.x / 2, position.y, 20 * Math.sin(frameCount * 0.01) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  const options = {}

  useEffect(() => {
    setPosition({x: canvasWidth, y: canvasHeight})
  }, [canvasHeight, canvasWidth])

  const onClick = () => {
    setPosition(prevState => ({x: prevState.x, y: prevState.y - 10}));
  }

  return (
    <Canvas draw={draw} options={options} height={canvasHeight} width={canvasWidth} onClick={onClick} />
  );
}

export default Fireworks;
