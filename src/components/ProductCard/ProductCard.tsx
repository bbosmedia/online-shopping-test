import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCardHeaderCards } from '..'
import numberWithSpaces from '../../helpers/number.with.space'
import { IProduct } from '../../pages/ProductsPage/products.data'
import './ProductCard.scss'

const ProductCard = ({ product }: { product: IProduct }) => {
	return (
		<div className="product-card">
			<div className="product-card-header">
				<ProductCardHeaderCards product={product} />
				<img className="product-image" src={product.img} alt={product.name} />
			</div>
			<div className="product-card-body">
				<Link className="product-card-name" to={`/checkout/${product.id}`}>
					{product.name}
				</Link>
				<span className="product-card-price">{numberWithSpaces(product.price)} сум</span>
				<div className="product-card-monthly">
					<span className="price">от {numberWithSpaces(product.monthlyprice)} сум</span>
					<span className="month">x24</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
