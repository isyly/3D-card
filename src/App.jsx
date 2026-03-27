import { useRef } from "react";
import { BgGrid, Scanlines } from "./components/Background";
import Stage from "./components/Stage";
import InfoCard from "./components/InfoCard";
import ARButton from "./components/ARButton";
import "./index.css";

export default function App() {
  const mvRef = useRef(null);

  const handleAR = () => {
    if (mvRef.current?.activateAR) {
      mvRef.current.activateAR();
    }
  };

  return (
    <div className="app">
      <BgGrid />
      <Scanlines />
      <Stage onModelRef={(mv) => (mvRef.current = mv)} />
      <div className="panel-wrap">
        <InfoCard />
        <ARButton onClick={handleAR} />
      </div>
    </div>
  );
}
