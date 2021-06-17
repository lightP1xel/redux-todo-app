import { List, Typography, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { deletetodo, toggleDoneTodo } from '../../store/reducers/todosReducer'

const Todos = () => {
  const todos = useSelector((state) => state.todos.items)
  const filter = useSelector((state) => state.filterReducer.filter)

  const dispatch = useDispatch()

  const onDeleteTodo = (id) => {
    dispatch(deletetodo(id))
  }

  const onToggleTodo = (id) => {
    dispatch(toggleDoneTodo(id))
  }

  const filterTodos = (todos, filter) => {
    if (filter === 'Active') {
      return todos.filter((item) => !item.isDone)
    } else if (filter === 'Done') {
      return todos.filter((item) => item.isDone)
    } else {
      return todos
    }
  }
  const filteredTodos = filterTodos(todos, filter)

  return (
    <List
      dataSource={filteredTodos}
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
