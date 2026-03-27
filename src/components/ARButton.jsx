export default function ARButton({ onClick }) {
  return (
    <button className="ar-button" onClick={onClick}>
      <span className="ar-dot" />
      VOIR EN RÉALITÉ AUGMENTÉE
    </button>
  );
}
