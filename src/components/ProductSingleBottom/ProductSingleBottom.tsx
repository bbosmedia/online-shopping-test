import React from 'react'
import numberWithSpaces from '../../helpers/number.with.space'
import './ProdcutSingleBottom.scss'

const ProductSingleBottom = () => {
	return (
		<div className="product-single-bottom">
			<h5 className="title-name">Акции</h5>
			<ul>
				<li>
					<div className="left">
						<img src={require('../../assets/icons/Акция-trade-in.png')} alt="icon" />
						<div>
							<span className="title">Обменяй свой старый айфон и получи скидку на новый</span>
							<span className="price">- {numberWithSpaces(400000)} сум</span>
						</div>
					</div>
					<div className='checkbox'>
						<input type="checkbox" />
                        <img src={require('../../assets/icons/check.png')} alt="Check icon" />
					</div>
				</li>
				<li>
					<div className="left">
						<img src={require('../../assets/icons/Акция-bundle.png')} alt="icon" />
						<div>
							<span className="title">Наушники в подарок</span>
							<span className="price">Apple airpods</span>
						</div>
					</div>
					<div className='checkbox'>
						<input type="checkbox" />
                        <img src={require('../../assets/icons/check.png')} alt="Check icon" />
					</div>
				</li>
				<li>
					<div className="left">
						<img src={require('../../assets/icons/Акция-скидка.png')} alt="icon" />
						<div>
							<span className="title">Скидка 20% на смартфоны</span>
							<span className="price">- {numberWithSpaces(10000)} сум</span>
						</div>
					</div>
					<div className='checkbox'>
						<input type="checkbox" />
                        <img src={require('../../assets/icons/check.png')} alt="Check icon" />
					</div>
				</li>
				<li>
					<div className="left">
						<img src={require('../../assets/icons/Акция-скидка-2.png')} alt="icon" />
						<div>
							<span className="title">Скидка на айфоны</span>
							<span className="title">IMEI 012345678901234</span>
							<span className="price">- {numberWithSpaces(400000)} сум</span>
						</div>
					</div>
					<div className='checkbox'>
						<input type="checkbox" />
                        <img src={require('../../assets/icons/check.png')} alt="Check icon" />
					</div>
				</li>
			</ul>

            <button className='order-btn'>Добавить в корзину</button>
		</div>
	)
}

export default ProductSingleBottom
