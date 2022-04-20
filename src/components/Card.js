import React from 'react'
import { ReactComponent as Travel_svg } from '../icons/travel_plans.svg'
import { ReactComponent as Dot } from '../icons/fill_219.svg'
export default function Card(props){
    return (
        <div className='card d-flex align-center flex-column mb-35'>
            <div className="card-img">
                 <img src={props.imageUrl} width='100%' height={168} className='card-img m-20' alt='img'></img>
            </div>
            <div className="card-place">
                <Dot className='card-dot'/>
                <span className='card-location'>{props.location}</span>
                <a href="https://goo.gl/maps/CUdyE8eDnXhomdgM8">View on Google Maps</a>
            </div>
            {/* <p className='card-title'>{props.title}</p>
            <div className='card-dates'>
                <p className='card-start-date'>{props.startDate}</p>
                <p className='card-end-date'>{props.endDate}</p>
            </div>
            <Travel_svg className='card-travel-svg'/>
            <p className='card-description'>{props.description}</p> */}
        </div>
    )
}