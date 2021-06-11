import { useRef, useEffect } from 'react'

const useCanvas = (draw, options={}) => {
  const canvasRef = useRef(null)

  const resizeCanvasToDisplaySize = (canvas) => {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio:ratio=1 } = window
      const context = canvas.getContext('2d')

      canvas.width = width * ratio
      canvas.height = height * ratio
      context.scale(ratio, ratio)
      return true // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext(options.context ?? '2d')
    let frameCount = 0
    let animationFrameId
    
    resizeCanvasToDisplaySize(canvas)

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, options.context])
  
  return canvasRef
}

export default useCanvas
