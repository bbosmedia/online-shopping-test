import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductImageSlider.scss'

const ProductImageSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	}
	return (
		<div className="product-image-slider">
			<Slider {...settings}>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
				<div className="slider-item">
					<img src={require('../../assets/product-images/product-slider.png')} alt="1" />
				</div>
			</Slider>
		</div>
	)
}

export default ProductImageSlider
