import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import withLoader from "./hoc/withLoader";
import useURLLoader from "./hooks/useURLLoader";

interface IShowResult {
  message: string;
  status: string;
}
// const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message} alt="" />
//     </>
//   );
// };

const dogCeoApi = "https://dog.ceo/api/breeds/image/random";

function App() {
  // const WrappedDogShow = withLoader(DogShow, dogCeoApi);
  const [refresh, setRefresh] = useState(false);
  const [data, loading] = useURLLoader(dogCeoApi, [refresh]);

  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <button
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            Refresh dog photo
          </button>
        </p>
        {loading ? (
          <p>读取中</p>
        ) : (
          <img src={dogResult && dogResult.message} alt="" />
        )}
      </header>
    </div>
  );
}

export default App;
