import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Canvas from './components/Canvas'

function App() {
  const headerRef = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    if (headerRef?.current !== null) {
      setCanvasHeight(window.innerHeight - headerRef.current.offsetHeight)
    }
  }, [headerRef])

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
      <div ref={headerRef} id='header'>
        <Title>Web Art by Maxime</Title>
      </div>
      <Canvas draw={draw} options={options} height={canvasHeight} width={window.innerWidth} />
    </div>
  );
}

const Title = styled.h1`
  margin: 0;
`

export default App;
