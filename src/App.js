import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Fireworks from './components/canvas/Fireworks';

function App() {
  const headerRef = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    if (headerRef?.current !== null) {
      setCanvasHeight(window.innerHeight - headerRef.current.offsetHeight)
    }
  }, [headerRef])

  return (
    <Wrapper>
      <div ref={headerRef} id='header'>
        <Title>Web Art by Maxime</Title>
      </div>
      <Fireworks canvasHeight={canvasHeight} canvasWidth={window.innerWidth} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000;
`
const Title = styled.h1`
  margin: 0;
  padding: 10px;
  color: #fff;
`

export default App;
