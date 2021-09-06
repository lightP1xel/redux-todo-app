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
    <>
      <h1 className={style.title}>Show: </h1>
      <Button type="primary" onClick={showAllTodos}>
        All
      </Button>
      <Button onClick={showActiveTodos}>Active</Button>
      <Button onClick={showDoneTodos}>Done</Button>
    </>
  )
}

export default Filter
