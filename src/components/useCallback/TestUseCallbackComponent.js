import {memo, useCallback, useMemo, useState} from "react";

const TestUseCallbackComponent = () => {
    const [count, setCount] = useState(0);

    const onItemClick = useCallback((e) => console.log(e.target), []);

    return (<div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(prevState => prevState + 1)}>Inc</button>

        <Child onItemClick={onItemClick}/>
    </div>);
};

//if no function is passed as props

/*const Child = memo(() => {
    const array = new Array(1000).fill(1);
    console.log('Child rerender');

    return <div>
        <ul>
            {array.map(e=> (
                <li>{e}</li>
            ))};
        </ul>
    </div>
});*/

//if any function is passed as props but onItemClick is always different so rerender the whole thing
//which we don't want
// so to fix it useCall back at onItemClick definition
// Diff between useMemo and useCallback is -> useMemo for variable to memorise and
// useCallback is used to function memorise

const Child = memo(({onItemClick}) => {
    const array = new Array(10).fill(1);
    console.log('Child rerender');

    return <div>
        <ul>
            {array.map(e=> (
                <li onClick={onItemClick}>{e}</li>
            ))}
        </ul>
    </div>
});

export default TestUseCallbackComponent;