import React, { useRef, useEffect } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const w = document.body.offsetWidth;
  const h = document.body.offsetHeight;
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    const matrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#0f0";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    const interval = setInterval(matrix, 50);

    return () => clearInterval(interval);
  }, [canvasRef]);

  return (
    <canvas
    className="-z-10"
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }} 
    ></canvas>
  );
};

export default MatrixBackground;
