import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import HeadCalc from './Components/HeadCalc';
function App() {
  const [num,setNum] = React.useState("");
  const [screen,setScreen] = React.useState("");
  const [oper,setOper] = React.useState([0]);
  const keys=[{val:"7",col:"#EAE3DB"},{val:"8",col:"#EAE3DB"},{val:"9",col:"#EAE3DB"},{val:"DEL",col:"#A2B3E1"},{val:"4",col:"#EAE3DB"},{val:"5",col:"#EAE3DB"},{val:"6",col:"#EAE3DB"},{val:"+",col:"#EAE3DB"},{val:"1",col:"#EAE3DB"},{val:"2",col:"#EAE3DB"},{val:"3",col:"#EAE3DB"},{val:"-",col:"#EAE3DB"},{val:".",col:"#EAE3DB"},{val:"0",col:"#EAE3DB"},{val:"/",col:"#EAE3DB"},{val:"x",col:"#EAE3DB"},{val:"RESET",col:"#A2B3E1"},{val:"=",col:"#F96C5B"}];
  //const keys=["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x","RESET","="];
  function calculator(str){
    let action="";
    let len = oper.length;
    let ans=0;
    for(let i=0;i<str.length;i++){
      if((str[i]==="+"||str[i]==="-"||str[i]==="x"||str[i]==="/")){
        action=(str[i]);
      }
    }
    
    switch(action){
      case "+":
        ans = oper[len-1]+parseFloat(num);
        break;
      case "-":
        ans = oper[len-1]-parseFloat(num);
        break;
      case "x":
        ans = oper[len-1]*parseFloat(num);
        break;
      case "/":
        ans = oper[len-1]/parseFloat(num);
        break;        
    }
    setNum("");
    return ans;
  }
  function deleter(){
    let a = num.toString().slice(0,-1);
    let b = screen.toString().slice(0,-1);
    if(num==="")setNum(b);
    else setNum(a);
    setScreen(b);
  }
  function buttonClick(e){
    switch(e){
      case "RESET": 
        setNum("");
        setScreen("");
        setOper([0]);
        break;
      case "DEL":
        deleter();
        break;
      case "+": case "-": case "x" : case "/":
        setScreen(prev=>{
          return (prev+e);
        });
        setOper((prev)=>{
          if(num!=="")
          return [...prev,parseFloat(num)];
        else
         return prev;
        })
        setNum("");
        break;

      case "=":
        if(screen==="NaN"){setScreen("")}
        setScreen(calculator(screen))
        setOper((prev)=>{
          return [...prev,calculator(screen)];
        });
        break;  
      default:
        if(screen===NaN||screen===Infinity){
          setNum("");
          setScreen("");
          alert("I beg you please don't try to get Infinity 😭. Hit Reset Now!");
        
      }
        setNum(prev=>{
          if(typeof(screen)==='number')
          return (screen+e);
        else
          return (prev+e);
        });
        setScreen(prev=>{
          return (prev+e);
        });
        break;  
    }
  }
  return (
    <main id="backdrop" className='App overflow-y-scroll flex justify-center items-center w-screen h-screen text-white bg-[#3a4764] text-2xl'>
      <div className='main w-[350px] h-full sm:w-[450px]'>
        <HeadCalc />
        <section id="screen" className='screen rounded-xl tracking-wider sparta roundec-xl my-3 px-4 flex justify-end items-center h-[75px] text-3xl font-semibold bg-[#182034]'>
          {screen}
        </section>
        <section id="keypad" className='keys sparta flex flex-wrap py-2 justify-center bg-[#232c43] rounded-xl'>
          {keys.map((each)=>{
            return (each.val==="RESET" || each.val==="=") ? (<Buttons key={each.val} color={each.col} click={buttonClick} val={each.val} wid={true} />) :
            (<Buttons color={each.col} key={each.val} click={buttonClick} val={each.val} wid={false} />)
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
