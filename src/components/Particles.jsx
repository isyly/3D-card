const PARTICLES_DATA = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: 1 + Math.random() * 3,
  left: 4 + Math.random() * 92,
  bottom: 4 + Math.random() * 65,
  delay: Math.random() * 8,
  dur: 3 + Math.random() * 4,
  green: i % 4 === 0,
}));

export default function Particles() {
  return PARTICLES_DATA.map((p) => (
    <div
      key={p.id}
      className="particle"
      style={{
        width: p.size,
        height: p.size,
        left: `${p.left}%`,
        bottom: `${p.bottom}%`,
        background: p.green ? "#00ffaa" : "#00d4ff",
        boxShadow: `0 0 ${p.size * 2}px ${
          p.green ? "rgba(0,255,170,.8)" : "rgba(0,212,255,.8)"
        }`,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.dur}s`,
      }}
    />
  ));
}
