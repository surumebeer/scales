import { keys } from "./const";
import { Board } from "./components/Board";
import { Global } from "@emotion/react";
import { globalCSS } from "./globalCss";

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <div className="App">
        <div>
          <select>
            {keys.map((key) => (
              <option value={key.value}>{key.name}</option>
            ))}
          </select>
        </div>
        <div>
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
