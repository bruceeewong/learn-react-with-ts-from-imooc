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





## 其他

### npx是什么？

- 直接运行包，避免全局安装模块
- 运行node_modules下的包，如查看版本

