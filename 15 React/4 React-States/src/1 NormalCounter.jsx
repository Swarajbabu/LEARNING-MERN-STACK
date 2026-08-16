let count = 0;

export const Counter = () => {
    function incCount() {
        count += 1;
        console.log("Count in console:", count);
    }

    return (
        <>
            <h3>Count: {count}</h3> 
            <button onClick={incCount}>Increase Count</button>
        </>
    );
    
};





