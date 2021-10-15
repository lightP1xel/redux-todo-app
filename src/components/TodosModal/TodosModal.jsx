import {React, useState} from 'react'
import { useParams } from 'react-router'
import { Modal } from 'antd'
import { TodoModalFooter } from './TodoModalFooter'
import { useSelector } from 'react-redux'
import { getTodos } from '../../store/selectors/selectors'
import style from './style.module.css'

export const TodosModal = (props) => {
  const params = useParams()
  const [isModalVisible, setIsModalVisible] = useState(true)
  const todos = useSelector(getTodos)

const todo = todos.filter(todo => todo.id === params.id)[0]

  return (
    <>
      <Modal title={todo.title} visible={isModalVisible} footer={<TodoModalFooter onClick={props.handleCancel}/>}>
        <>
          <p>Description: { todo.description }</p>
          <p className={style.todoTime}>{ todo.timeOfCreate }</p>
        </>
      </Modal>
    </>
  )
}
