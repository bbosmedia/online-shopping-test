import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/checkout" element={<ProductsPage />} />
				<Route path="/checkout/:id" element={<SingleProductPage />} />
			</Routes>
		</>
	)
}

export default App
