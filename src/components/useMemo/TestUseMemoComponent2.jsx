import {useMemo, useState} from "react";

const TestUseMemoComponent2 = () => {
    const [num, setNum] = useState(0);

    const calcNthFib = (n) => {
        if(n < 2) return 1;
        return calcNthFib(n-1) + calcNthFib(n -2);
    }
    const fibNum = useMemo(() => calcNthFib(num), [num]);

    return (<div>
        <button onClick={() => setNum(5)}>5th</button>
        <button onClick={() => setNum(10)}>10th</button>
        <button onClick={() => setNum(35)}>35th</button>
        <button onClick={() => setNum(40)}>40th</button>
        <br/>
        <div>{fibNum}</div>
    </div>);
};

export default TestUseMemoComponent2;