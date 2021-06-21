import { List, Typography, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { deletetodo, toggleDoneTodo } from '../../store/reducers/todosReducer'
import { getFilter, getTodos } from '../../store/selectors/selectors'

const Todos = () => {
  const todos = useSelector(getTodos)
  const filter = useSelector(getFilter)

  const dispatch = useDispatch()

  const onDeleteTodo = (id) => {
    dispatch(deletetodo(id))
  }

  const onToggleTodo = (id) => {
    dispatch(toggleDoneTodo(id))
  }

  const filteredTodos = () => {
    if (filter === 'ALL') {
      return todos
    }
    if (filter === 'ACTIVE') {
      return todos.filter((item) => item.isDone === false)
    }
    if (filter === 'DONE') {
      return todos.filter((item) => item.isDone === true)
    }
  }

  return (
    <List
      dataSource={filteredTodos()}
      bordered
      renderItem={(item) => (
        <List.Item>
          <Typography.Text delete={item.isDone}>{item.name}</Typography.Text>
          <div>
            <Button onClick={() => onToggleTodo(item.id)}>
              {item.isDone ? 'Undo' : 'Done'}
            </Button>
            <Button danger onClick={() => onDeleteTodo(item.id)}>
              Delete
            </Button>
          </div>
        </List.Item>
      )}
    />
  )
}

export default Todos
