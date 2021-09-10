import React, { useState, useEffect } from 'react';
import './loading.css'

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        /* fetch(url) */
        .then(()=> {
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    if (isError) {
        return (
            <div>
                <h1>ERROR...(ERROR GIF, ERROR PAGE)</h1>
            </div>
        )
    }
    if (isLoading) {
        return (
            <div class="loader"></div>
        )
    }

    return (
        <div>
            <h2>Page Loaded</h2>
            <button /* onClick={} */>Error Page Out</button>
            <img /* src={} *//>
        </div>
    )
}

export default Loading
