import OrbitRings from "./OrbitRings";
import Particles from "./Particles";
import FrameCorners from "./FrameCorners";
import DataTags from "./DataTags";
import ModelViewer from "./ModelViewer";

export default function Stage({ onModelRef }) {
  return (
    <div className="stage">
      <div className="center-glow" />
      <OrbitRings />
      <div className="scan-sweep" />
      <Particles />
      <FrameCorners />
      <DataTags />
      <ModelViewer onModelRef={onModelRef} />
    </div>
  );
}
