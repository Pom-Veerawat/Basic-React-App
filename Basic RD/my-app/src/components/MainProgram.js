import React, { useState } from "react";

const MainProgram = (props) => {
  const [inputText, setInputText] = useState("start val");
const [outputText,setOutputText]= useState("กรุณาพิมพ์ และกดปุ่ม");


  const onButtonClickHandler = () => {
    console.log("clicked!!");
    console.log(inputText);
  };

  const inputOnchangeHandler=(event)=>{
    setInputText((prev)=>{
        //prev การันตีค่าก่อนหน้า
       return event.target.value;
    })
  }

  return (
    <div>
      <input style={{ width: "500px" }} onChange={inputOnchangeHandler} value={inputText} type="text"></input>
      <br></br>
      <button onClick={onButtonClickHandler}>Click</button>
      <br>
      </br>
      <p>{outputText}</p>
    </div>
  );
};

export default MainProgram;
