import React, { SFC } from 'react'
interface IProps {
  customStyle?: string
  style?: any
  onClick?: () => void
  key?: any
}
const ListItem: SFC<IProps> = ( { customStyle, style, onClick, key, children } ) => {
  return (
    <li onClick={onClick} className={customStyle} style={style} key={key}>
      {children}
    </li>
  )
}
export default ListItem