import {useMemo, useState, useEffect} from "react";
import {cleanup} from "@testing-library/react";

const TestUseMemoComponent = () => {
const fruits = useMemo(()=> ['apple', 'orange', 'pear'], []);
const [count, setCount] = useState(0);

    return (<div>
        <Child fruits={fruits}/>
        <button onClick={() => setCount(prevState => prevState + 1)}>
            Plus 1
        </button>
        {count}
    </div>);
};


const Child = ({fruits}) => {

    useEffect(() => {
        console.log(fruits);
    }, [fruits]);

    return <div> FRUIT!</div>;
};


export default TestUseMemoComponent;