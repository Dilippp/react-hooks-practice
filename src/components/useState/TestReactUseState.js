import {useState} from "react";

const UseStateComponent = () => {
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);

    // a child component
    const Card = ({msg}) => {
        return <div>{msg}</div>
    }

    return <div>
        <button onClick={() => setMessage("Hello there")}> Say hello</button>
        <button onClick={() => setMessage("Good Bye")}> Say goodbye</button>
        <button onClick={() => setCount(prevState => prevState + 1)}> Plus by 1</button>
        <br/>
        <div>Parent Component: {message}</div>
        Child Component: <Card msg={message}></Card>
        <div>Count: {count}</div>
    </div>;
};
export default UseStateComponent;