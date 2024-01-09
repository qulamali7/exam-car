import React from 'react'
import "./index.scss";
import CarCards from '../CarCards'

const Cars = () => {
    return (
        <>
            <section id='cars'>
                <div className='cars_container'>
                    <div className='cars_content'>
                        <CarCards />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cars