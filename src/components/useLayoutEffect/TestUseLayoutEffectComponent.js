import {useEffect, useState, useLayoutEffect} from "react";

const TestUseLayoutEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    // difference between useEffect and useLayoutEffect
    //useEffect
    //state change -> rerender -> screen updated -> useEffect runs
    //useLayoutEffect
    //state change -> rerender -> useLayoutEffect runs -> screen updated

    useLayoutEffect(() => {
        let width = document.getElementById('hello').offsetWidth;
        if(width > 600) {
            setMessage('Width is greater than 600');
        } else {
            setMessage('Width is less than 600');
        }
    }, [count]);

    return <div>
        <button onClick={()=> setCount(prevState => prevState + 1)}>Plus 1</button>
        <div id={'hello'} style={{background: 'pink'}}>
            {message}
        </div>
        Count: {count}
    </div>
}
export default TestUseLayoutEffectComponent;