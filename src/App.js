import './App.css';
import Buttons from './Components/Buttons';
import HeadCalc from './Components/HeadCalc';
function App() {
  const keys=["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x","RESET","="];
  return (
    <main className='App overflow-y-scroll flex justify-center items-center w-screen h-screen text-white bg-[#3a4764] text-2xl'>
      <div className='main w-[350px] h-full sm:w-[450px]'>
        <HeadCalc />
        <section className='screen tracking-widest barlow roundec-xl my-4 px-4 flex justify-end items-center h-[75px] text-3xl font-semibold bg-black'>
          399,764
        </section>
        <section className='keys flex flex-wrap justify-center bg-black rounded-xl'>
          {keys.map((each)=>{
            return (each==="RESET" || each==="=") ? (<Buttons key={each} val={each} wid={true} />) :
            (<Buttons key={each} val={each} wid={false} />)
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
