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

  const filterButtons = [
    {id: 1, buttonName: 'All', buttonFunction: showAllTodos},
    {id: 2, buttonName: 'Active', buttonFunction: showActiveTodos},
    {id: 3, buttonName: 'Done', buttonFunction: showDoneTodos},
  ]

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Show todos: </h1>
      {filterButtons.map((item)=> {
        return <Button key={item.id} onClick={item.buttonFunction}>{item.buttonName}</Button>
      })}
    </div>
  )
}

export default Filter