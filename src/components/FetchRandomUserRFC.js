import React, { useEffect, useState } from 'react';

export default function FetchRandomUserRFC() {
    const [randomUser, setRandomUser] = useState('')

    useEffect(() => {
        fetch('https://api.randomuser.me/')
            .then(res => res.json())
            .then(data => {
                setRandomUser(data.results[0])
                console.log(data.results[0])
            })
    }, [])



    

    return (
        <div>
            <h2>Functional Component</h2>

            <div>{randomUser.name.first} {randomUser.name.last}</div>
            <img src={randomUser.picture.large} alt='' />
        </div>
    )
}
