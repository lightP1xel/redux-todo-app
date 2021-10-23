import { React } from 'react'
import { useParams } from 'react-router'
import { Modal } from 'antd'
import { TodoModalFooter } from './TodoModalFooter'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/selectors/selectors'
import style from './style.module.css'

export const TodoModal = () => {
  const params = useParams()
  const todos = useSelector(getTodos)

  const todo = todos.find(todo => todo.id === params.id)  

  return (
    <>
      <Modal title={todo.title} visible footer={<TodoModalFooter />}>
        <>
          <p>Description: { todo.description }</p>
          <p className={style.todoTime}>{ todo.timeOfCreate }</p>
        </>
      </Modal>
    </>
  )
}
