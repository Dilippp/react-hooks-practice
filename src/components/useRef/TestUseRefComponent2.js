import {useRef, useState} from "react";

const TestUseRefComponent2 = () => {

    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
        //console.log("Only focus function call")
    }
    //console.log("No rerender")
    return <div>
        <input ref={inputRef}/>
        <button onClick={focus}>Focus</button>
    </div>
}
export default TestUseRefComponent2;