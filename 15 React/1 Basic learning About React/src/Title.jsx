import React from 'react'

const Title = () => {
    return (
        <div>This is my Title of my project</div>
    )
}

const Sum = () =>{
    let a = 5;
    let b = 3;
    let sum = a + b;
    return (
        <>
            <h1>The Sum of {a} and {b} = {sum}</h1>
        </>
    )
}

export {Title, Sum};