import React from 'react'
import { useParams } from 'react-router'
import { TodoModal } from '..'
import { AddTodoModal } from './AddTodoModal/AddTodoModal'

export const Modals = () => {

const params = useParams()

  return (
    <>
      {params.id === 'create-todo' ? <AddTodoModal /> : <TodoModal />}
    </>
  )
}
