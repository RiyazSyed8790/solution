import React from "react";
export default function HeadCalc(){
    const [act,setAct] = React.useState(1);  
  let inLineStyle = {
    visibility:"visible"
  }
  function show(e){
    setAct(e);
    if(e===2){
        document.getElementById("backdrop").classList.add("bg-white");
        document.getElementById("keypad").classList.add("child:bg-black");
        document.getElementById("keypad").classList.add("bg-white");
    }
  }
    return(
        <section className='head flex justify-between items-end'>
        <h2 className='text-3xl font-semibold barlow tracking-wider '>calc</h2>
        <div className='flex items-end'>
          <h2 className='text-2xl barlow mx-4'>THEME</h2>
          <div className='slider flex flex-col'>
            <div className='digits flex w-full justify-between'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className='dots flex items-center w-full child:mx-1 child:my-1 bg-[#232c43] rounded-xl'>
              <button onClick={()=>show(1)} style={(act===1)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#d03f2f]'></button>
              <button onClick={()=>show(2)} style={(act===2)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#ca5502]'></button>
              <button onClick={()=>show(3)} style={(act===3)?inLineStyle:{backgroundColor:"transparent"}} className=' w-4 h-4 rounded-xl bg-[#00e0d1]'></button>
            </div>
          </div>

        </div>
      </section>
    )
}