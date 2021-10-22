import React, { useContext } from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { useHistory } from 'react-router'
import { deletetodo, toggleDoneTodo } from '../../store/reducers/todosReducer'
import { useDispatch } from 'react-redux'
import { NotificationProvider } from '../NotificationProvider'

export const ActionsDropdown = ({ id, match, openEditingModal }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { notify } = useContext(NotificationProvider)

  const onDeleteTodo = (id) => {
    const successDelete = dispatch(deletetodo(id))
    if (successDelete) {
      notify(
        {
          message: 'Your todo',
          description: 'You have deleted the todo.',
          duration: 5,
        }
      )
    }
  }

  const onToggleTodo = (id) => {
    const successToggle = dispatch(toggleDoneTodo(id))
    if (successToggle) {
      notify(
        {
          message: 'Your todo',
          description: 'You have moved the task.',
          duration: 5,
        }
      )
    }
  }

  const menu = (
    <Menu>
      <Menu.Item key="1"><Button onClick={() => onToggleTodo(id)}>Switch todo</Button></Menu.Item>
      <Menu.Item key="2"><Button onClick={() => history.push(`${match}/${id}`)}>More info</Button></Menu.Item>
      <Menu.Item key="4"><Button danger onClick={() => onDeleteTodo(id)}>Delete</Button></Menu.Item>
    </Menu>
  )

  return (
    <Dropdown trigger={['click']} overlay={menu}>
      <Button>Actions</Button>
    </Dropdown>
  )
}
