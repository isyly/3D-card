function CardCorners() {
  return (
    <>
      <div className="ic-corner ic-tl" />
      <div className="ic-corner ic-tr" />
      <div className="ic-corner ic-bl" />
      <div className="ic-corner ic-br" />
    </>
  );
}

function CardRow({ label, children }) {
  return (
    <div className="card-row">
      <span className="card-lbl">{label}</span>
      <span className="card-val">{children}</span>
    </div>
  );
}

export default function InfoCard() {
  return (
    <div className="info-card">
      <CardCorners />
      <div className="card-name">REY SYLVAIN</div>
      <div className="card-divider" />
      <CardRow label="MAIL">
        <a href="mailto:sylvain.rey.75@gmail.com">sylvain.rey.75@gmail.com</a>
      </CardRow>
      <CardRow label="TÉL">
        <a href="tel:+33626375142">06 26 37 51 42</a>
      </CardRow>
    </div>
  );
}
