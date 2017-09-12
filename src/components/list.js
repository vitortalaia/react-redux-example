import React from 'react'

import { Task } from './task'

export const List = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {
          props.tasks.map((task) => {
            return <Task key={ task.id } { ...task } { ...props }/>
          })
        }
      </tbody>
    </table>
  )
}
