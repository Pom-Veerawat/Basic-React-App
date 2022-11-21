import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';
import MainProgram from './components/MainProgram';
import { useState } from 'react';

function App() {

  const [title,setTitle]= useState("initial");

  const onReturnFromMainProgram = (val)=>{
    setTitle(val);
  }


  

  return (
    <div className="App">
      <header className="App-header">
        <div>TEST and {title}</div>
        <Card>
          <MainProgram onTitleChange={onReturnFromMainProgram}>

          </MainProgram>
        </Card>
      </header>
    </div>
  );
}

export default App;
