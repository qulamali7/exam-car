import React, { useEffect, useState } from 'react'
import "./index.scss";
const CarCards = () => {
    const [data, setData] = useState([])
    async function GetFetch() {
        try {
            fetch("http://localhost:3100/cars")
                .then((res) => res.json())
                .then((data) => setData(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
      GetFetch()
    }, [])
    
    return (
        <>
            <div className='car_cards'>
                {data && data.map((x) => (
                    <div className='car_card'>
                        <h4>{x.model}</h4>
                        <p>{x.year}</p>
                        <p>{x.engine}</p>
                        <button>Add Basket</button>
                        <button>Add Wishlist</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CarCards