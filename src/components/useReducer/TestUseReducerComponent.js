import {useReducer} from "react";

const TestUseReducerComponent = () => {
    const initialState = {
        username: '',
        password: '',
        error: '',
        isLoggedIn: false,
    };
    function reducer (state, action ) {
        switch (action.type) {
            case 'FIELD_CHANGE':
                return {...state, [action.fieldName]: action.payload,}
            case 'LOGIN':
                return {
                    ...state,
                    error: '',
                }
            case 'LOGOUT':
                return {
                    ...state,
                    username: '',
                    password: '',
                    isLoggedIn: false,
                }
            case 'SUCCESS':
            return {
                ...state,
                password: '',
                isLoggedIn: true
            }
            case 'ERROR':
                return {
                    ...state,
                    error: 'Incorrect username or password'
                }
            default :
                return state;
        }
    }
    function handleLogin(e) {
        e.preventDefault();
        dispatch({type: 'LOGIN'});
        if(username==='dilip' && password==='123') {
            dispatch({type: 'SUCCESS'});
        } else {
            dispatch({type: 'ERROR'});
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const {username, password, error, isLoggedIn} = state;
    return <div>
        {isLoggedIn ? (
            <>
                <h2>Welcome {username}</h2>
                <button onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
            </>
        ) : (
            <form onSubmit={handleLogin}>
        <input type="text"
               onChange={(e) =>
            dispatch(
                {type: 'FIELD_CHANGE', fieldName: 'username', payload: e.target.value})}
        />
        <input type="password"
               onChange={(e) =>
                   dispatch({type: 'FIELD_CHANGE', fieldName: 'password', payload: e.target.value})}
        />
        <button type="submit">Login</button>
            {error && <div style={{color: "red"}}>{error}</div>}
    </form>
        )}
    </div>
}
export default TestUseReducerComponent;