import React from "react";
function Buttons(props){
    return (
    <button style={props.wid?(window.innerWidth>500?{width:"175px"}:{width:"145px"}):{width:""}} className=" w-16 h-16 md:h-20 md:w-20 mx-2 my-2 font-semibold text-black bg-white text-center rounded-md text-3xl">
    {props.val}
    </button>
    )
}
export default Buttons;