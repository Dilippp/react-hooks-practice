import {useRef, forwardRef, useImperativeHandle} from "react";

const TestUseImperativeHandleComponent = () => {
const inputRef = useRef();

    const FancyInput = forwardRef((props, forwardedRef) => {
        const localRef = useRef();
        useImperativeHandle(forwardedRef, () => {
            return {
                focusAndBlur: () => {
                    localRef.current.focus();
                    setTimeout(() => {
                        localRef.current.blur();
                        localRef.current.style.border = '2px solid red'
                    }, 1000);
                }
            }
        });
        return <input ref={localRef}/>;
    });

    return <div>
     {/*Child component*/}
     <FancyInput ref={inputRef}/>

     <button onClick={() => inputRef.current.focusAndBlur()}>Focus</button>
    </div>
}
export default TestUseImperativeHandleComponent;