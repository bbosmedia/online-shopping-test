import React, { FC, PropsWithChildren } from 'react'
import "./BreadCrumb.scss"

const BreadCrumb:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="breadcrumb">{children}</div>
  )
}

export default BreadCrumb