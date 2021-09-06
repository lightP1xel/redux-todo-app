import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addtodo } from '../../store/reducers/todosReducer'
import { useState } from 'react'

const AddTodo = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(addtodo(name))
    setName('')
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  return (
    <Form layout="inline">
      <Form.Item label="Add todo for today">
        <Input value={name} onChange={onChangeName} />
      </Form.Item>
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </Form>
  )
}

export default AddTodo
