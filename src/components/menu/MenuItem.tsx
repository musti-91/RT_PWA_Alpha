import React, { SFC } from 'react'
import { Icon } from 'semantic-ui-react'

interface IProps {
  iconName?: any;
  size?: any;
  title?: string;
  color?: any;
  onClick?: () => void;
}

const MenuItem: SFC<IProps> = ( { title, iconName, size, onClick, color } ) => {
  return (
    <span onClick={onClick} className="menu-item">
      {iconName && <Icon name={iconName} size={size} inverted />}
      {title && <span>{title}</span>}
    </span>
  )
}
export default MenuItem