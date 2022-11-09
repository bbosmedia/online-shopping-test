import React from 'react'
import { BreadCrumb, BreadCrumbLink, MainArea, PageTitle, ProductCardHeaderCards, ProductImageSlider, ProductInfo, ProductSingleBottom } from '../../components'
import { productData } from '../ProductsPage/products.data'
import './SingleProductPage.scss'

const SingleProductPage = () => {
	return (
		<MainArea>
			<div className="single-product-page">
				<BreadCrumb>
					<BreadCrumbLink title="Заявки" address="/" />
					<BreadCrumbLink title="Оформить заказ" address="/checkout" />
					<BreadCrumbLink title="Смартфон Apple iPhone 11 128 Gb Slim Box черный" />
				</BreadCrumb>
				<div className="single-product-page-inner">
					<button className='cart-icon'>
						<img src={require('../../assets/icons/cart-icon.png')} alt="Cart Icon" />
					</button>
					<PageTitle>Смартфон Apple iPhone 11 128 Gb Slim Box черный</PageTitle>
					<section className="single-product-page-main">
						<div className="single-product-images">
							<ProductCardHeaderCards product={productData[0]}></ProductCardHeaderCards>
							<ProductImageSlider />
						</div>
						<ProductInfo />
					</section>
					<ProductSingleBottom></ProductSingleBottom>
				</div>
			</div>
		</MainArea>
	)
}

export default SingleProductPage
