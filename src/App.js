import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'
export default function App() {
    const places = data.map(item => {
        return (
            <Card
                key = {item.id}
                {...item}//spread operator for each item 
            />
        )
    })
    return (
        <div className ='container'>
            <Navbar/>
            <section className='list'>
                {places}
            </section>
        </div>
    )
}