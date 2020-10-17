import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 每次渲染都会调用
    console.log("add effect", positions.x);
    const updateMouse = (e: MouseEvent) => {
      console.log("inner", positions.x);
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);

    // 清除 effect 副作用
    return () => {
      console.log("remove effect", positions.x);
      document.removeEventListener("mousemove", updateMouse);
    };
  }, [positions]);

  return positions;
};

export default useMousePosition;
