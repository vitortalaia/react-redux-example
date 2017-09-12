import React from 'react'

export const Task = (props) => {
  const onButtonClick = () => {
    props.incrementStatus(props.id)
  }

  return (
    <tr>
      <td>{ props.id }</td>
      <td>{ props.status }</td>
      <td>{ props.name }</td>
      <td><button onClick={ onButtonClick }>Increment status</button></td>
    </tr>
  )
}
