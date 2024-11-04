import {useReducer} from "react";

const UseReducerComponent = () => {

    const initialState = {count : 0};

    function reducer (state, action ) {
        switch (action.type) {
            case 'Increment':
                return {count: state.count + 1};
            case 'Decrement':
                return {count: state.count - 1};
            default :
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);
    return <div>
        <button onClick={() => dispatch({type: 'Increment'})}>Increment:</button>
        <button onClick={() => dispatch({type: 'Decrement'})}>Decrement:</button>
        {count}
    </div>;
};
export default UseReducerComponent;