import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../style/ProductReviews.css'

function ProductReviews({ productReviews }) {
    return (
        <div className="ProductReviews">
            { productReviews.map((item, index) => (
                <ProductReviewCard name={ item.name } price={ item.name } image={ item.image } review={ item.review } index={ index } key={ item.image } />
            )) }
        </div>
    )
}

export default ProductReviews
