import React, { useEffect, useState } from "react";

const MainProgram = (props) => {
  const [inputText, setInputText] = useState("start val");
  const [outputText, setOutputText] = useState("กรุณาพิมพ์ และกดปุ่ม");

  useEffect(() => {
    
    console.log("EFFECT RUNNING");
    checkingInputVal();
    return() =>{
        console.log("EFFECT CLEANUP");
    }

  }, [inputText]);

  const onButtonClickHandler = () => {
    console.log("clicked!!");
    console.log(inputText);
    checkingInputVal();
  };

  const inputOnchangeHandler = (event) => {
    setInputText((prev) => {
      //prev การันตีค่าก่อนหน้า
      return event.target.value;
    });
  };

  const checkingInputVal = () => {
    const thisInputText = inputText;
    if (thisInputText === "done") {
      setOutputText("รัน checkingInputVal finish");
    } else {
      setOutputText("กรุณา done และกดปุ่ม");
    }
  };

  return (
    <div>
      <input
        style={{ width: "500px" }}
        onChange={inputOnchangeHandler}
        value={inputText}
        type="text"
      ></input>
      <br></br>
      <button onClick={onButtonClickHandler}>Click</button>
      <br></br>
      <p>{outputText}</p>
    </div>
  );
};

export default MainProgram;
