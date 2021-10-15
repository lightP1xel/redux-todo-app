import React from 'react'
import { Menu, Dropdown, Button, notification } from 'antd'
import { useHistory } from 'react-router'
import { deletetodo, toggleDoneTodo } from '../../store/reducers/todosReducer'
import { useDispatch } from 'react-redux'

export const ActionsDropdown = ({ id, match }) => {
  const router = useHistory()
  const dispatch = useDispatch()

  const openToggleNotification = () => {
    notification.open(
      {
        message: 'Your todo',
        description: 'You have moved the task.',
        duration: 5,
      }
    )
  }

  const openNotification = () => {
    notification.open(
      {
        message: 'Your todo',
        description: 'You have deleted the todo!',
        duration: 5,
      }
    )
  }

  const onDeleteTodo = (id) => {
    dispatch(deletetodo(id))
    openNotification()
  }

  const onToggleTodo = (id) => {
    dispatch(toggleDoneTodo(id))
    openToggleNotification()
  }

  const menu = (
    <Menu>
      <Menu.Item key="1"><Button onClick={() => onToggleTodo(id)}>Switch todo</Button></Menu.Item>
      <Menu.Item key="2"><Button onClick={() => {router.push(`${match}/${id}`)}}>More info</Button></Menu.Item>
      <Menu.Item key="3"><Button danger onClick={() => onDeleteTodo(id)}>Delete</Button></Menu.Item>
    </Menu>
  )
console.log(id)
  return (
    <Dropdown overlay={menu}>
      <p>Actions</p>
    </Dropdown>
  )
}
