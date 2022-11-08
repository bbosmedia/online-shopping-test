import React from 'react'
import './BreadCrumbsLink.scss'
import { Link } from 'react-router-dom'

const BreadCrumbLink = ({ title, address }: { title: string; address?: string }) => {
	if (!address) return <span className="breadcrumbs-item">{title}</span>
	return (
		<Link className="breadcrumbs-link" to={address}>
			{title}
			<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.98483 9.76517C3.8517 9.63203 3.8396 9.4237 3.94853 9.27689L3.98483 9.23483L7.2195 6L3.98483 2.76516C3.8517 2.63203 3.8396 2.4237 3.94853 2.27689L3.98483 2.23484C4.11797 2.1017 4.3263 2.0896 4.47311 2.19853L4.51517 2.23484L8.01516 5.73484C8.1483 5.86797 8.1604 6.0763 8.05147 6.22311L8.01516 6.26517L4.51517 9.76517C4.36872 9.91161 4.13128 9.91161 3.98483 9.76517Z" fill="#BBC2D0" />
			</svg>
		</Link>
	)
}

export default BreadCrumbLink
