import logo from "./logo.svg";
import "./App.css";
import Card from "./UI/Card";
import MainProgram from "./components/MainProgram";
import DataProvider from "./store/DataProvider";
import { useState } from "react";
import SecondProgram from "./components/SecondProgram";

function App() {
  const [title, setTitle] = useState("initial");

  const onReturnFromMainProgram = (val) => {
    setTitle(val);
  };

  const fnAtApp = (txt) => {
    console.log("alert from App fnAtApp " + txt);
  };

  const fnAtApp2 = (txt) => {
    console.log("alert from App fnAtApp2 " + txt);
  };

  const variableProps = { p1: "value2", p2: fnAtApp2 };

  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <div>TEST and {title}</div>
          <Card>
            <MainProgram p1={"value1"} p2={fnAtApp}></MainProgram>
            {/* <MainProgram {...variableProps}></MainProgram> */}
            
          </Card>
        </header>
        <SecondProgram></SecondProgram>
      </div>
    </DataProvider>
  );
}

export default App;
