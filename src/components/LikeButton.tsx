import React, { useState, useEffect } from "react";
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);

  // 第一次以及每次渲染后执行
  useEffect(() => {
    document.title = `点击了${like}次`;
  });

  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like} Like
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default LikeButton;
