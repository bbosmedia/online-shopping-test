import React from 'react'
import './Pagenation.scss'
import { Link } from 'react-router-dom'

const Pagenation = () => {
	return (
		<div className="pagenation">
			<Link to="/">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.0379 24.4129C20.3707 24.0801 20.401 23.5592 20.1287 23.1922L20.0379 23.0871L11.9513 15L20.0379 6.91291C20.3707 6.58008 20.401 6.05925 20.1287 5.69224L20.0379 5.58709C19.7051 5.25426 19.1842 5.224 18.8172 5.49632L18.7121 5.58709L9.96209 14.3371C9.62925 14.6699 9.599 15.1908 9.87132 15.5578L9.96209 15.6629L18.7121 24.4129C19.0782 24.779 19.6718 24.779 20.0379 24.4129Z" fill="#262728" />
				</svg>
			</Link>
			<div className="pages-number">
				<Link to="/">1</Link>
				<Link className='active' to="/">2</Link>
				<Link to="/">3</Link>
				<Link to="/">4</Link>
				<Link to="/">5</Link>
				<p>...</p>
				<Link to="/">10</Link>
			</div>
			<Link to="/">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.91291C9.62925 6.58008 9.599 6.05925 9.87131 5.69224L9.96209 5.58709C10.2949 5.25426 10.8158 5.224 11.1828 5.49632L11.2879 5.58709L20.0379 14.3371C20.3707 14.6699 20.401 15.1908 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z" fill="#262728" />
				</svg>
			</Link>
		</div>
	)
}

export default Pagenation
