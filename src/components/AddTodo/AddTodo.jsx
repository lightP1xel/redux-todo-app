import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'

export const AddTodo = () => {
const history = useHistory()
  return (
    <>
      <Button onClick={() => history.push('/todos/create-todo')}>Add Todo</Button>         
    </>
  )
}
