import React from "react";
import logo from "./logo.svg";
import "./App.css";
import withLoader from "./hoc/withLoader";

interface IShowResult {
  message: string;
  status: string;
}
const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} alt="" />
    </>
  );
};

const dogCeoApi = "https://dog.ceo/api/breeds/image/random";

function App() {
  const WrappedDogShow = withLoader(DogShow, dogCeoApi);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <WrappedDogShow />
      </header>
    </div>
  );
}

export default App;
