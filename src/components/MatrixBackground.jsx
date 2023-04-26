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

      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;

        // Calculate the hue value based on the current time and column index
        const hue = (Date.now() / 20 + ind * 10) % 360;
        const color = `hsl(${hue}, 100%, 50%)`;
        ctx.fillStyle = color;

        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 20;
        }
      });
    };

    const interval = setInterval(matrix, 50);

    return () => clearInterval(interval);
  }, [canvasRef]);

  return (
    <div className="bg-black w-full h-full -z-20 relative">

      <canvas
        className="-z-10 opacity-20"
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></canvas>
    </div>
  );
};


export default MatrixBackground;
