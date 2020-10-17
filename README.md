# React with TS

## 用tsx写一个React组件

```tsx
import React from "react";

interface IHelloProps {
  message?: string;
}

// React.FC is an alias to React.FunctionComponent
// use generics interface to describe props
const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};
Hello.defaultProps = {
  message: "Hello World",
};

export default Hello;

```

## React Hook

React 16.8 带来的全新特性，使用函数式组件代替 class 组件的写法。

没有破坏性改动

- 完全可选

- 百分百向后兼容

- 没有计划从React移除class

解决问题

- 组件很难复用状态逻辑

- 生命周期函数无法拆分

使用Hook完全拥抱函数

### Hook 是什么？

React16.8新提供的允许用户钩入react周期的函数。

### State Hook

`useState`接收state初始值，返回数组，包含state值与该state的setter

```tsx
import React, { useState } from "react";
const LikeButton: React.FC = () => {
  // 使用hook可以让函数组件也有state
  // 使用state hook拆分逻辑
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
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
```

### Effect Hook

#### 无需清除的Effect

示例: 使用useEffect使用DOM完成标题更新

如果使用class组件，写法需要在初始化和更新写重复的代码

```tsx
componentDidMount() {
	document.title = `you clicked ${this.state.count} times`
}
componentDidUpdate() {
	document.title = `you clicked ${this.state.count} times`
}
```

使用 Effect Hook

```tsx
import {useEffect} from 'react'

// ...
// 第一次以及每次渲染后执行
useEffect(() => {
  document.title = `点击了${like}次`;
});
```

#### 需要清除的Effect

示例：完成一个鼠标跟踪器

如果使用class组件，写法需要在初始化和更新写重复的代码

```tsx
componentDidMount() {
	document.addEventListener('click', this.updateMouse)
}
componentDidUpdate() {
	document.removeEventListener('click', this.updateMouse)
}
```

使用 Effect Hook

```tsx
import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 每次渲染都会调用
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);

    // 清除 effect 副作用,但没有控制运行次数
    return () => {
      document.removeEventListener("click", updateMouse);
    };
  });

  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;

```

#### 控制 useEffect 的执行

useEffect 第二个参数为指明effect触发的依赖

如果空数组，只会在组件开始和结束触发

```tsx
seEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);

    return () => {
      document.removeEventListener("click", updateMouse);
    };
  }, []);  // 只会在组件开始和结束触发
```

指明依赖，则对应的依赖变了才触发

```tsx
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  
  // 第一次以及每次渲染后执行
  useEffect(() => {
    console.log("run effect");
    document.title = `点击了${like}次`;
  }, [like]); // 指明依赖
```

### 自定义HOOK

规定以 `use*` 开头，返回state

```tsx
// src/hooks/useMousePosition
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
```

在别的地方直接引入函数并使用，即可获取 position state 以及 执行 effect

### 替代HOC

HOC弊端：

- 变量来源不清晰
- 冗余节点



## 其他

### npx是什么？

- 直接运行包，避免全局安装模块
- 运行node_modules下的包，如查看版本

