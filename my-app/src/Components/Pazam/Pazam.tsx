import { useState } from 'react'
import './Pazam.css'
import { rankToTitle } from '../../rankToTitle';

function Pazam({points}: {points: number}) {

    return (
        <div className='pazam-container'>

            <h3 className='pazam-header'>
            פז"ם עמית

            </h3>
            <h2 className='pazam-content'>{
                rankToTitle(points)}

            </h2>
        </div>
    )

}

export default Pazam;