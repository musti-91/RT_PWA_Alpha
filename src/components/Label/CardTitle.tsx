import React, { SFC } from 'react'
import { Icon } from "semantic-ui-react"

interface IProps {
  title?: string
  body?: string
  icon?: string
  data?: any
}
const CardTitle: SFC<IProps> = ( { title, body, icon, data } ) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{body}</h4>
      {icon &&
        <span>
          <Icon name="user" className="cardTitle-icon" size="large" />
          {data}
        </span>}
    </div>
  )
}
export default CardTitle