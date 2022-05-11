import React, {useState} from 'react'

function Character({name, details}) {

    const [detail, setDetail] = useState(false)

    return (
        <div>
            <h2>{name}</h2>
            {detail &&
            <>
                <h3>{details}</h3>
            </>
            }
            <button onClick={ ()=> {setDetail(!detail)} }>{detail ? "Hide" : "Show"} </button>
        </div>
    )
}

export default Character