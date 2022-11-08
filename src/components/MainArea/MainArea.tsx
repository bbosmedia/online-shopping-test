import React, { FC, PropsWithChildren } from 'react'
import './MainArea.scss'

const MainArea: FC<PropsWithChildren> = ({ children }) => {
	return <main className="main-area">{children}</main>
}

export default MainArea
