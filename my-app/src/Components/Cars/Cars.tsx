import { useState } from 'react'
import './Cars.css'
import car from '../../assets/Citroen-C4-2024.png'

function Cars({name, cars} : {name: string, cars: any}) {

    return (

        <div className='car-container'>
            <h2 className='choose-car-header'>
                היי {name}, בואי נצא לדרך!
            </h2>
            <h3 className='choose-car-secondary-header'>
                בחר/י אמצעי תחבורה
            </h3>

            <div className='vehicle-container'>
                <div className='vehicle-btn'> 
                    <img src={car} className='vehicle-img'></img>

                </div>
                <h3 className='vehicle-name'>
                    האוטו של עמית
                </h3>
            </div>
        </div>
    )

}

export default Cars;