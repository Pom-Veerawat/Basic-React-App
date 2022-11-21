import React, { useEffect, useState } from "react";

const MainProgram = (props) => {
  const [inputText, setInputText] = useState("start val");
  const [outputText, setOutputText] = useState("กรุณาพิมพ์ และกดปุ่ม");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    console.log("EFFECT RUNNING");
    setIsLoading(true);
    const identifier = setTimeout(() => {
        checkingInputVal();
        setIsLoading(false);
      }, 500);
    //checkingInputVal();
    return() =>{
        console.log("EFFECT CLEANUP");

        clearTimeout(identifier);
    }

  }, [inputText]);

  const onButtonClickHandler = () => {
    console.log("clicked!!");
    console.log(inputText);
    checkingInputVal();
    props.onTitleChange(inputText);

  };

  const inputOnchangeHandler = (event) => {
    setInputText((prev) => {
      //prev การันตีค่าก่อนหน้า
      return event.target.value;
    });
  };

  const checkingInputVal = () => {
    //setIsLoading(true);
    const thisInputText = inputText;
    if (thisInputText === "done") {
      setOutputText("รัน checkingInputVal finish");
    } else {
      setOutputText("กรุณา done และกดปุ่ม");
    }
    //setIsLoading(false);
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
      {isLoading ? <div>Loading.....</div> : <div>No load</div>}
      {/* {isLoading && <div>Loading.....</div>} // if ture ทำ */}
      {/* {isLoading ?? <div>Loading.....</div>} // if not null ทำ */}
    </div>
  );
};

export default MainProgram;
