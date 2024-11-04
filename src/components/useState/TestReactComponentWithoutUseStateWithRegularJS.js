//import {useState} from "react";

const UseStateFun = () => {
    //const [message, setMessage] = useState('');
    let msg='';
    const sayHello = () => {
        msg = 'Hello there';
        document.getElementById('hello').innerText = msg;
    }

    const sayGoodBye = () => {
        msg = 'Good bye3';
        document.getElementById('hello').innerText = msg;
    }
    // a child component
    const Card = ({msg}) => {
    return <div>{msg}</div>
    }
    return <div>
        <button onClick={sayHello}> Say hello</button>
        <button onClick={sayGoodBye}> Say goodbye</button>
        <br/>

        {/*again need to update the DOM manually like above*/}
        <Card msg={msg}></Card>

        <div id='hello'>{msg}</div>
    </div>;
};
export default UseStateFun;