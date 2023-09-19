import { getElementError } from "@testing-library/react";
import React from "react";
export default function HeadCalc(props){
    const [act,setAct] = React.useState(1);  
  let inLineStyle = {
    visibility:"visible"
  }
  function show(e){
    setAct(e);
    switch(e){
      case 1:
        document.getElementById("backdrop").classList.add("bg-[#3a4764]","text-white");
        document.getElementById("keypad").classList.add("bg-[#232c43]");
        document.getElementById("slider").classList.add("bg-[#252D44]");
        document.getElementById("screen").classList.add("bg-[#182034]");
        //case 2 styles
        document.getElementById("backdrop").classList.remove("bg-[#E6E6E6]","text-[#3F3F35]");
        document.getElementById("keypad").classList.remove("bg-[#D3CDCD]");
        document.getElementById("slider").classList.remove("bg-[#D3CDCD]");
        document.getElementById("screen").classList.remove("bg-[#EEEEEE]");
        //rem case 3
        document.getElementById("backdrop").classList.remove("bg-[#17062A]","text-[#FAE036]");
        document.getElementById("keypad").classList.remove("bg-[#1E0836]");
        document.getElementById("slider").classList.remove("bg-[#1E0836]");
        document.getElementById("screen").classList.remove("bg-[#1E0836]");
        break;
        
      
      case 2:
        document.getElementById("backdrop").classList.add("bg-[#E6E6E6]","text-[#3F3F35]");
        document.getElementById("keypad").classList.add("bg-[#D3CDCD]");
        document.getElementById("slider").classList.add("bg-[#D3CDCD]");
        document.getElementById("screen").classList.add("bg-[#EEEEEE]");
        //rem case 1
        document.getElementById("backdrop").classList.remove("bg-[#3a4764]","text-white");
        document.getElementById("keypad").classList.remove("bg-[#232c43]");
        document.getElementById("slider").classList.remove("bg-[#252D44]");
        document.getElementById("screen").classList.remove("bg-[#182034]");
        //rem case 3
        document.getElementById("backdrop").classList.remove("bg-[#17062A]","text-[#FAE036]");
        document.getElementById("keypad").classList.remove("bg-[#1E0836]");
        document.getElementById("slider").classList.remove("bg-[#1E0836]");
        document.getElementById("screen").classList.remove("bg-[#1E0836]");
        break;
      
      case 3:
        document.getElementById("backdrop").classList.add("bg-[#17062A]");
        document.getElementById("backdrop").classList.add("text-[#FAE036]");
        document.getElementById("keypad").classList.add("bg-[#1E0836]");
        document.getElementById("slider").classList.add("bg-[#1E0836]");
        document.getElementById("screen").classList.add("bg-[#1E0836]");
        //rem case 1
        document.getElementById("backdrop").classList.remove("bg-[#3a4764]","text-white");
        document.getElementById("keypad").classList.remove("bg-[#232c43]");
        document.getElementById("slider").classList.remove("bg-[#252D44]");
        document.getElementById("screen").classList.remove("bg-[#182034]");
        //rem case 2
        document.getElementById("backdrop").classList.remove("bg-[#E6E6E6]","text-[#3F3F35]");
        document.getElementById("keypad").classList.remove("bg-[#D3CDCD]");
        document.getElementById("slider").classList.remove("bg-[#D3CDCD]");
        document.getElementById("screen").classList.remove("bg-[#EEEEEE]");
        break;
      default:
        console.log("ntng to run");
        break;  
    }
  }
  React.useEffect(function(){
   props.load(act);
  },[act]);
    return(
        <section  className='head flex justify-between items-end'>
        <h2 className='text-3xl font-semibold barlow tracking-wider '>calc</h2>
        <div className='flex items-end'>
          <h2 className='text-2xl barlow mx-4'>THEME</h2>
          <div className='slider flex flex-col'>
            <div className='digits flex w-full barlow justify-between'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div id="slider" className='dots flex items-center w-full child:mx-1 child:my-1 bg-[#252D44] rounded-xl'>
              <button onClick={()=>show(1)} style={(act===1)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#d03f2f]'></button>
              <button onClick={()=>show(2)} style={(act===2)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#F78E39]'></button>
              <button onClick={()=>show(3)} style={(act===3)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#00e0d1]'></button>
            </div>
          </div>

        </div>
      </section>
    )
}