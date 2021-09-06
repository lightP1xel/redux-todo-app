import { Divider } from 'antd'
import Filter from './components/Filter'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className="App">
      <Filter />
      <Divider />
      <AddTodo />
      <Divider />
      <Todos />
    </div>
  )
}

export default App