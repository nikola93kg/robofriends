import React from 'react'
import Card from './Card';
import norobots from '../Img/norobots.svg'


function CardList({ filteredRobots, deleteRobot }) {

    if (filteredRobots >= filteredRobots.length) {
        return (
            <>
                <h2>Try something else...</h2>
                <img src={norobots} alt="" />
            </>
        )
    }

    return (
        <div className="divCards">
            {filteredRobots.map((robot) => {
                return <Card key={robot.id} {...robot} deleteRobot={deleteRobot} />
            })}
        </div>
    )
}

export default CardList



