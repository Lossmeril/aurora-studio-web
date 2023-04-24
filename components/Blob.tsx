import { useEffect, useState } from "react";

const Blob = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      id="blob"
      style={{ left: mousePos.x + "px", top: mousePos.y + "px" }}
    ></div>
  );
};

export default Blob;
