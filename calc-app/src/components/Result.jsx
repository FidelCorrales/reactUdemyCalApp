import React from 'react'

const Result = (props) => {
    debugger;
    console.log("Renderización de Result", props)
    return (
        <div className="result">
            {props.value}
        </div>
    )
}

export default Result;