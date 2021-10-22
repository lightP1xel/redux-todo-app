import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import style from './style.module.css'
import { filterActive, filterAll, filterDone } from '../../store/export'

export const Filter = () => {
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
    {key: 1, buttonName: 'All', action: showAllTodos},
    {key: 2, buttonName: 'Active', action: showActiveTodos},
    {key: 3, buttonName: 'Done', action: showDoneTodos},
  ]

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Show todos: </h1>
      {filterButtons.map(({ key, buttonName, action }) => <Button key={key} onClick={action}>{buttonName}</Button>)}
    </div>
  )
}