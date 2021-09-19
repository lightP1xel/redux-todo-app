import { useDispatch } from 'react-redux'
import { addtodo } from '../../store/reducers/todosReducer'
import { useState } from 'react'
import { Button, Input } from 'antd'

const AddTodo = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addtodo(name))
    setName('')
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  return (
    <form style={{margin: '10px'}}>
      <Input style={{width: '200px'}} type="text" value={name} onChange={onChangeName}/>
      <Button style={{marginLeft: '20px'}} onClick={handleAddTodo}>Add task</Button>
    </form>
  )
}

export default AddTodo
