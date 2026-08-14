export const Counter = () => {
    let count = 0;

    function incCount() {
        count += 1;
        console.log(count);
    }

    return (
        <>
            <h3>Count: {count}</h3> 
            <button onClick={incCount}>Increase Count</button>
        </>
    );
};


