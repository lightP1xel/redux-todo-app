import React, { useCallback, useContext, useMemo } from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { useHistory } from 'react-router'
import { deletetodo, toggleDoneTodo } from '../../store/reducers/todosReducer'
import { useDispatch } from 'react-redux'
import { NotificationProvider } from '../NotificationProvider'

export const ActionsDropdown = ({ id, match }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { notify } = useContext(NotificationProvider)

  const onDeleteTodo = useCallback((id) => {
    const isDeleted = dispatch(deletetodo(id))
    if (isDeleted) {
      notify(
        {
          message: 'Your todo',
          description: 'You have deleted the todo.',
        }
      )
    }
  }, [dispatch, notify])

  const onToggleTodo = useCallback((id) => {
    const isToggled = dispatch(toggleDoneTodo(id))
    if (isToggled) {
      notify(
        {
          message: 'Your todo',
          description: 'You have moved the task.',
        }
      )
    }
  }, [dispatch, notify])

  const menu = useMemo(() => 
    <Menu>
      <Menu.Item key="1"><Button onClick={() => onToggleTodo(id)}>Switch todo</Button></Menu.Item>
      <Menu.Item key="2"><Button onClick={() => history.push(`${match}/${id}`)}>More info</Button></Menu.Item>
      <Menu.Item key="3"><Button danger onClick={() => onDeleteTodo(id)}>Delete</Button></Menu.Item>
    </Menu>, [history, id, match, onToggleTodo, onDeleteTodo])

  return (
    <Dropdown trigger={['click']} overlay={menu}>
      <Button>Actions</Button>
    </Dropdown>
  )
}
