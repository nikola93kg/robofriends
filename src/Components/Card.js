import React from 'react';

function Card({ id, name, username, email, deleteRobot }) {

    //example of prop drilling, should use useContext to avoid this

    return (
        <div className="tc dib br3 pa3 ma3 grow bw2 shadow-2 card">
            <img src={`https://robohash.org/${id + 10}?set=set3`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
                <button className='btn ' onClick={() => deleteRobot(id)}>delete</button>
            </div>
        </div>
    )
}

export default Card