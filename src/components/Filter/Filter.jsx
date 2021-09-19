import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import style from './style.module.css'
import {
  filterActive,
  filterAll,
  filterDone,
} from '../../store/reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const showAllTodos = () => {
    dispatch(filterAll())
  }

  const showActiveTodos = () => {
    dispatch(filterActive())
  }

  const showDoneTodos = () => {
    dispatch(filterDone())
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Show todos: </h1>
      <Button onClick={showAllTodos}>All</Button>
      <Button style={{margin: '0px 20px'}} onClick={showActiveTodos}>Active</Button>
      <Button onClick={showDoneTodos}>Done</Button>
    </div>
  )
}

export default Filter
