import React from 'react'
import { IProduct } from '../../pages/ProductsPage/products.data'
import './ProductCardHeaderCards.scss'

const ProductCardHeaderCards = ({ product }: { product: IProduct }) => {
	return (
		<div className="product-card-header-cards">
			{product.change && <img src={require('../../assets/icons/Акция-trade-in.png')} alt="Refresh Icon" />}
			{product.gift && <img src={require('../../assets/icons/Акция-bundle.png')} alt="Gift Icon" />}
			{product.discount && <img src={require('../../assets/icons/Акция-скидка.png')} alt="Discount Icon" />}
			{product.discounttwo && <img src={require('../../assets/icons/Акция-скидка-2.png')} alt="Discount Icon" />}
		</div>
	)
}

export default ProductCardHeaderCards
