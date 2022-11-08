import React from 'react'
import { BreadCrumb, BreadCrumbLink, MainArea, Pagenation, PageTitle, ProductCard, SearchBar } from '../../components'
import { productData } from './products.data'
import './ProductsPage.scss'

const ProductsPage = () => {
	return (
		<MainArea>
			<BreadCrumb>
				<BreadCrumbLink title="Заявки" address="/" />
				<BreadCrumbLink title="Оформить заказ" />
			</BreadCrumb>
			<PageTitle>Оформить заказ</PageTitle>
			<SearchBar />
			<h4 className="all-products-count">Все товары (121)</h4>
			<div className="products-page-inner">
				{productData.map((product, index) => (
					<ProductCard product={product} />
				))}
			</div>
			<Pagenation />
		</MainArea>
	)
}

export default ProductsPage
