import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const cars = [
        {
            brand: 'BMW',
            brandId: 'bmw001',
            price: 8000000,
            isPurchased: true
        },
        {
            brand: 'Mercedes',
            brandId: 'merc002',
            price: 7500000,
            isPurchased: true
        },
        {
            brand: 'Porche',
            brandId: 'por003',
            price: 10000000,
            isPurchased: true
        },
    ]
    return (
        <>
            {cars.map((item) => (
                <div key={item.brandId}>
                    <li><Link to={`/cars/${item.brandId}`}>{item.brand}</Link>{''}</li>
                </div>
            ))}

        </>
    )
}

export default Product