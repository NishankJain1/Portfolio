import { useEffect, useRef, useState } from "react";

const texts = ["Software Developer", "Writer", "Designer"];

const InteractiveTextNodes = () => {
  const canvasRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const density = 9;
    const drawDistance = 20;
    const mouse = { x: -9999, y: -9999 };
    let points = [];
    let targetPoints = [];
    let transitioning = false;
    let transitionStart = 0;
    const morphDuration = 2000; // 2s morph duration

    // Smooth easing function for organic flow
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const drawTextPoints = (text) => {
      const bg = document.createElement("canvas");
      const bgCtx = bg.getContext("2d");
      bg.width = canvas.width;
      bg.height = canvas.height;
      const fontSize = Math.min(200, canvas.width / text.length * 2.5);
      bgCtx.font = `bold ${fontSize}px Arial Black`;
      bgCtx.textAlign = "center";
      bgCtx.fillStyle = "#fff";
      bgCtx.fillText(text, canvas.width / 2, canvas.height / 2);

      const pixels = bgCtx.getImageData(0, 0, bg.width, bg.height).data;
      const pts = [];
      for (let y = 0; y < bg.height; y += density) {
        for (let x = 0; x < bg.width; x += density) {
          const idx = (x + y * bg.width) * 4;
          if (pixels[idx + 3] > 128) {
            pts.push({ x, y, ox: x, oy: y });
          }
        }
      }
      return pts;
    };

    // Initialize first word
    points = drawTextPoints(texts[index]);

    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const leave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let progress = 0;
      if (transitioning) {
        progress = Math.min((timestamp - transitionStart) / morphDuration, 1);
        progress = easeOutCubic(progress);
      }

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Smooth morph interpolation
        if (transitioning && targetPoints[i]) {
          p.ox = p.ox + (targetPoints[i].ox - p.ox) * 0.05 * progress;
          p.oy = p.oy + (targetPoints[i].oy - p.oy) * 0.05 * progress;
        }

        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(100 / (dist * dist), 5);
        if (dist < 120) {
          p.x += dx / dist * force * 10;
          p.y += dy / dist * force * 10;
        } else {
          p.x += (p.ox - p.x) * 0.05;
          p.y += (p.oy - p.y) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < drawDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / drawDistance})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cycle through texts
    const cycle = setInterval(() => {
      const next = (index + 1) % texts.length;
      targetPoints = drawTextPoints(texts[next]);

      // Equalize point counts
      while (targetPoints.length < points.length) {
        const p = points[Math.floor(Math.random() * points.length)];
        targetPoints.push({ ox: p.ox, oy: p.oy });
      }
      while (points.length < targetPoints.length) {
        const p = targetPoints[Math.floor(Math.random() * targetPoints.length)];
        points.push({ ...p });
      }

      transitioning = true;
      transitionStart = performance.now();

      setTimeout(() => {
        transitioning = false;
        points.forEach((p, i) => {
          if (targetPoints[i]) {
            p.ox = targetPoints[i].ox;
            p.oy = targetPoints[i].oy;
          }
        });
      }, morphDuration);

      setIndex(next);
    }, 4000);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      points = drawTextPoints(texts[index]);
    };
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(cycle);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", resize);
    };
  }, [index]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-20 left-0 w-full h-full z-0"
    />
  );
};

export default InteractiveTextNodes;
