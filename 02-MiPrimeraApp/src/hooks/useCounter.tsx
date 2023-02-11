import  { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const oneUp = (): void => {
        setCounter(counter + 1);
    };
    const oneDown = () => {
        setCounter(counter > 0 ? counter - 1 : counter);
    };
    return {
        counter,
        oneUp,
        oneDown,
    };
};

export default useCounter;
