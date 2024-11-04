import {useRef, useState} from "react";

const TestUseRefComponentUseCase1 = () => {
    //No rerender
    const countRef = useRef(0);
    //but rerender
    const [countState, setCountState] = useState(0);

    const countClicks = () => {
        countRef.current++;
        console.log(countRef.current);
    }
    countRef.current++;
    console.log(countRef.current);

    console.log('Component render');
    return <div>
        <button onClick={countClicks}>Ref</button>
        <button onClick={()=> setCountState(prevState => prevState + 1)}>State</button>
    </div>
}
export default TestUseRefComponentUseCase1;