import React, { useContext } from "react";
import DataContext from "../store/data-context";


const SecondProgram =()=>{
    
    const dataCtx = useContext(DataContext);
    const onClickShowCtxItem=()=>{
        console.log(dataCtx.items);
      }
    return <div>
        <button onClick={onClickShowCtxItem}>Log from another components</button>
      <br></br>
    </div>
}

export default SecondProgram;