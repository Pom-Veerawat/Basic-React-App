import React, { useContext, useEffect, useState } from "react";
import DataContext from "../store/data-context";

function isPalindrome(s) {
  let isPalindrome = false;
  let inverted_s = "";

  for (let index = s.length - 1; index >= 0; index--) {
    inverted_s = inverted_s + s[index];
  }
  //console.log(inverted_s);
  if (inverted_s == s) {
    isPalindrome = true;
  }
  return isPalindrome;
}
const MainProgram = (props) => {
  const [inputText, setInputText] = useState("start val");
  const [outputText, setOutputText] = useState("กรุณาพิมพ์ และกดปุ่ม");
  const [isLoading, setIsLoading] = useState(false);

  const dataCtx = useContext(DataContext);

  /* console.log(dataCtx.items);
  dataCtx.addItem({ id: 10, tmp: "test" }); */
  const onClickAddCtxItem=()=>{
    dataCtx.addItem({ id: 10, tmp: "test" });
  }
  const onClickShowCtxItem=()=>{
    console.log(dataCtx.items);
  }

  useEffect(() => {
    props.p2("in effect");
    console.log("EFFECT RUNNING");
    setIsLoading(true);
    const identifier = setTimeout(() => {
      checkingInputVal();
      setIsLoading(false);
    }, 500);
    //checkingInputVal();
    return () => {
      console.log("EFFECT CLEANUP");

      clearTimeout(identifier);
    };
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
    let s = inputText;
    let longest = 0;
    let longestSubString = "";
    let left = 0;
    let right = 0;
    if (s.length === 1) {
      longest = 1;
      longestSubString = s;
    }
    if (s.length === 2) {
      if (s[0] === s[1]) {
        longest = 2;
        longestSubString = s;
      }
    }
    if (s.length > 2) {
      if (s[s.length - 1] === s[s.length - 2]) {
        longest = 2;
        longestSubString = s[s.length - 1] + s[s.length - 2];
      }
    }
    if (isPalindrome(s) && s.length > 1) {
      longest = s.length;
      longestSubString = s;
    } else {
      for (let index = 1; index < s.length; index++) {
        left = index - 1;
        right = index + 1;
        if (s[index] === s[right]) {
          if (longest < 2) {
            longest = right - index + 1;
            longestSubString = s.substring(index, right + 1);
          }
        }
        do {
          if (s[left] === s[right]) {
            if (right - left + 1 > longest) {
              longest = right - left + 1;
              longestSubString = s.substring(left, right + 1);
            }
          } else {
            break;
          }
          left--;
          right++;
        } while (left >= 0 && right <= s.length);
      }
    }
    if (longest === 0) {
      setOutputText("No Palindromic");
    } else {
      setOutputText(
        "Longest Palindromic = " + longest + " Value = " + longestSubString
      );
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
      <button onClick={onClickAddCtxItem}>Add</button>
      <br></br>
      <button onClick={onClickShowCtxItem}>Log</button>
      <br></br>
      <p>{outputText}</p>
      {isLoading ? <div>Loading.....</div> : <div>No load</div>}
      {/* {isLoading && <div>Loading.....</div>} // if ture ทำ */}
      {/* {isLoading ?? <div>Loading.....</div>} // if not null ทำ */}

      <div>
        <p>{"from p1 =" + props.p1}</p>
      </div>
    </div>
  );
};

export default MainProgram;
