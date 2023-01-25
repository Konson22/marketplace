import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../assets/data'

export default function Categories() {
  return (
    <div className='home-section'>
        <div className="section-title">
            <h2>Top Categories</h2>
        </div>
        <div className="section-content categories-wraper">
            {categories.map((category, index) => (
                <Link className="category-card" key={index} to={`/products/${category.url}`}>
                    <img className='category-image-bg' src={category.image} alt='' />
                    <div className='category-card-text p-2'>{category.text}</div>
                </Link>
            ))}
        </div>
    </div>
  )
}
