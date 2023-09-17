import React from "react";
export default function HeadCalc(){
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
            <div className='dots flex items-center w-full child:mx-1 child:my-1 bg-black rounded-xl'>
              <button className=' w-4 h-4 rounded-xl bg-white'></button>
              <button className=' w-4 h-4 rounded-xl bg-white'></button>
              <button className=' w-4 h-4 rounded-xl bg-white'></button>
            </div>
          </div>

        </div>
      </section>
    )
}