import React, { FC, PropsWithChildren } from 'react'
import './PageTitle.scss'

const PageTitle:FC<PropsWithChildren> = ({children}) => {
  return (
    <h3 className='page-title'>{children}</h3>
  )
}

export default PageTitle