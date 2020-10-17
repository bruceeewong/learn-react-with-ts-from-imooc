import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 每次渲染都会调用
    console.log("run effect", positions.x);
    const updateMouse = (e: MouseEvent) => {
      console.log("run setter", positions.x);
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);

    // 清除 effect 副作用
    return () => {
      console.log("remove effect", positions.x);
      document.removeEventListener("click", updateMouse);
    };
  }, [positions]); // useEffect 第二个参数为指明依赖，如果空数组，只会在组件开始和结束触发

  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;
