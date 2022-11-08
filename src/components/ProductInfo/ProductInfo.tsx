import React from 'react'
import numberWithSpaces from '../../helpers/number.with.space'
import './ProductInfo.scss'

const ProductInfo = () => {
	return (
		<div className="single-product-info">
			<div className="product-price">
				<h5>Цена телефона</h5>
				<span className="price">{numberWithSpaces(7300000)} сум</span>
			</div>
			<div className="monthly-payment">
				<div className="price-category">
					<div className="price-main">
						<h5>Общая цена (с наценкой)</h5>
						<p className="price">{numberWithSpaces(6000000)} сум</p>
					</div>
					<div className="price-monthly">
						<span className="price">{numberWithSpaces(2433333)} сум</span>x3
					</div>
				</div>
				<div className="price-category-buttons">
					<button className="active">3 мес</button>
					<button>6 мес</button>
					<button>12 мес</button>
					<button>24 мес</button>
				</div>
				<p className="adding-price">
					Наценка: <b>5 %</b>
				</p>
			</div>
			<div className="product-characteries">
				<h5>Общие характеристики</h5>
				<ul>
					<li>Тип: моноблок (классический)</li>
					<li>Стандарт: 2G, 3G, 4G (LTE), 5G</li>
					<li>Операционная система: iOS 14</li>
				</ul>
				<button className="view-more-product-characteries">
					<span>Показать все</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.64131 16.2759C6.41942 16.054 6.39925 15.7068 6.5808 15.4621L6.64131 15.392L12.0324 10.0006L6.64131 4.60926C6.41942 4.38737 6.39925 4.04015 6.5808 3.79547L6.64131 3.72537C6.8632 3.50348 7.21042 3.48331 7.45509 3.66486L7.52519 3.72537L13.3585 9.55871C13.5804 9.7806 13.6006 10.1278 13.419 10.3725L13.3585 10.4426L7.52519 16.2759C7.28112 16.52 6.88539 16.52 6.64131 16.2759Z" fill="#00C48C" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ProductInfo
