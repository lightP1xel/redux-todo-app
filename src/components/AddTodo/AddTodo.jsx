import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'
import style from './style.module.css'

export const AddTodo = () => {
const history = useHistory()
  return (
    <>
      <Button className={style.button} onClick={() => history.push('/todos/create-todo')}>Add Todo</Button>         
    </>
  )
}
