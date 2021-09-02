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

  const onFilterAll = () => {
    dispatch(filterAll())
  }

  const onFilterActive = () => {
    dispatch(filterActive())
  }

  const onFilterDone = () => {
    dispatch(filterDone())
  }

  return (
    <>
      <h1 className={style.filterHeading}>Show: </h1>
      <Button type="primary" onClick={onFilterAll}>
        All
      </Button>
      <Button onClick={onFilterActive}>Active</Button>
      <Button onClick={onFilterDone}>Done</Button>
    </>
  )
}

export default Filter
