import { useRef, useEffect } from "react";

const MODEL_SRC = `${import.meta.env.BASE_URL}asset/BONHOMME BLEU2.glb`;

export default function ModelViewer({ onModelRef }) {
  const wrapRef = useRef(null);
  const mvRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const mv = document.createElement("model-viewer");
    mv.setAttribute("src", MODEL_SRC);
    mv.setAttribute("alt", "bonhomme bleu 3D");
    mv.setAttribute("ar", "");
    mv.setAttribute("ar-modes", "webxr scene-viewer quick-look");
    mv.setAttribute("camera-controls", "");
    mv.setAttribute("auto-rotate", "");
    mv.setAttribute("ar-button-label", "Voir en réalité augmentée");
    mv.style.cssText =
      "width:100%;height:100%;--poster-color:transparent;--progress-bar-color:#00d4ff;";

    wrapRef.current.appendChild(mv);
    mvRef.current = mv;
    if (onModelRef) onModelRef(mv);

    return () => {
      try {
        wrapRef.current?.removeChild(mv);
      } catch (_) {}
    };
  }, []);

  return <div ref={wrapRef} className="mv-wrap" />;
}
