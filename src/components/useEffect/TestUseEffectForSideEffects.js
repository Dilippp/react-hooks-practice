import {useEffect, useState} from "react";

const TestUseEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('');

    useEffect(() => {
    // for clean up purpose
        const interval = setInterval(() => {
            console.log('This will run every second');
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    useEffect(() => {
        //console.log('Hello');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res=> res.json())
            .then(user=> setTitle(user.title));
    },[]);

    useEffect(() => {
        document.title = 'The count is ' + count;
    },[count]);

    return <div>
        <button onClick={()=> setCount(prevState => prevState + 1)}>Plus 1</button>
         {count}
    <div>
        {title}
    </div>
    </div>
}
export default TestUseEffectComponent;