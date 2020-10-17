import React, { useState, useEffect, useRef } from "react";
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 第一次以及每次渲染后执行
  useEffect(() => {
    console.log("run effect");
    document.title = `点击了${like}次`;
  }, [like]); // 指明依赖

  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is update");
    } else {
      didMountRef.current = true;
    }
  });

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleClick = () => {
    setTimeout(() => {
      alert("You clicked, " + likeRef.current);
    }, 3000);
  };

  return (
    <>
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
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

      <button onClick={handleClick}>Alert</button>
    </>
  );
};

export default LikeButton;
