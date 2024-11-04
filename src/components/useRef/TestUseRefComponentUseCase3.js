import { useEffect, useRef, useState } from "react";

const TestUseRefComponent3 = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true); // Track if timer is running
    const [isCleanUpClick, setIsCleanUpClick] = useState(false); // Track if clean up is clicked
    const intervalIdRef = useRef(null);
    const pausedTimeRef = useRef(0); // To store the time when the timer is paused

    // Start the timer function
    function startUp() {
        if (isRunning || isCleanUpClick) {
            setIsRunning(true);
            setSeconds(pausedTimeRef.current); // Resume from paused time

            intervalIdRef.current = setInterval(() => {
                setSeconds((prevState) => prevState + 1);
            }, 500);
            setIsCleanUpClick(false);
        }
    }

    // Stop the timer function
    function cleanUp() {
        if (isRunning) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
            pausedTimeRef.current = seconds; // Store paused time
            setIsRunning(false);
            setIsCleanUpClick(true);
        }
    }

    // Ensure interval is cleared on component unmount
    useEffect(() => {
        startUp(); // Start timer on initial render
        return () => clearInterval(intervalIdRef.current); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={cleanUp} disabled={!isRunning}>
                Stop Timer
            </button>
            <button onClick={startUp} disabled={isRunning}>
                Start Timer
            </button>
        </div>
    );
};

export default TestUseRefComponent3;
