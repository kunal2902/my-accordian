import { useState } from 'react';
import './App.css';
import {questions} from './api'
import MyAccordian from './MyAccordian';

function App() {
  const [data,setData]=useState(questions)
  return (
    <>
    <div className="cont">
      <div className="main">
        <p>React Interview Questions</p>
        <div className="section">
          {data.map((currelem)=>{
            const {id}=currelem

              return       <MyAccordian key={id} {...currelem} />
              
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
