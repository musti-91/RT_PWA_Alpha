import React, { SFC } from 'react';
import MenuItem from './MenuItem';


interface IProps { }

const Menu: SFC<IProps> = ( { children } ) => {
  return (
    <div className="menu">
      {children}
    </div>
  )
}
export default Menu