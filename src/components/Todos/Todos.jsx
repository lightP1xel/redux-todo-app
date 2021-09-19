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
    switch(filter) {
      case 'ACTIVE':
        return todos.filter((item) => !item.isDone)
      case 'DONE':
        return todos.filter(({isDone}) => isDone)
      default:
        return todos
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
