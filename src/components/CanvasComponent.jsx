import React, { useEffect, useState, useRef } from 'react';

// TRIGGER WARNING: This code was first written for JS only and then converted to JSX.

function CanvasComponent() {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function rnd(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function render(skipPositions) {
      const heightScale = 1;
      ctx.fillStyle = 'rgb(250, 250, 250)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.lineWidth = 0;
      const hueStart = rnd(0, 0);
      const squareSize = 30;
      const rowHeight = Math.floor(squareSize * heightScale);
      const columns = Math.ceil(canvasWidth / squareSize) + 1;
      const rows = Math.ceil(canvasHeight / rowHeight);

      const minLightness = 90;
      const maxLightness = 100;

      for (let row = 0; row < rows; row++) {
        const hue = hueStart + row * 30;

        for (let col = 0; col < columns; col++) {
          const shouldSkip = skipPositions[row].includes(col);

          if (shouldSkip) {
            continue;
          }

          let x = col * squareSize;
          let y = row * rowHeight;

          if (row % 2 !== 0) {
            x -= squareSize / 2;
          }

          const time = Date.now() * 0.001;
          const lightness = (Math.sin(time + (row * 2 + col) * 0.1) + 1) / 2;
          const range = maxLightness - minLightness;
          const adjustedLightness = minLightness + lightness * range;
          const clr = `hsl(${hue}, 60%, ${adjustedLightness}%)`;
          ctx.fillStyle = clr;
          ctx.strokeStyle = clr;
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }

      requestAnimationFrame(() => render(skipPositions));
    }

    function generateSkipPositions(rows, columns) {
      const skipPositions = [];
      const skipCount = rnd(columns / 1.5, Math.floor(columns * 2));

      for (let row = 0; row < rows; row++) {
        const rowSkipIndices = [];
        for (let j = 0; j < skipCount; j++) {
          const skipIndex = rnd(0, columns - 1);
          rowSkipIndices.push(skipIndex);
        }
        skipPositions.push(rowSkipIndices);
      }

      return skipPositions;
    }

    function handleResize() {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    getCavasSize();

    function getCavasSize() {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    }

    const rows = Math.ceil(canvasHeight / (30 * 1));
    const columns = Math.ceil(canvasWidth / 30) + 1;
    const skipPositions = generateSkipPositions(rows, columns);

    render(skipPositions);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasHeight, canvasWidth]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}

export default CanvasComponent;
