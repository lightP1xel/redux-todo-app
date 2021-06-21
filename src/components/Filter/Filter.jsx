import { Button } from 'antd'
import { useDispatch } from 'react-redux'
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
      <label>Show: </label>
      <Button type="primary" onClick={onFilterAll}>
        All
      </Button>
      <Button onClick={onFilterActive}>Active</Button>
      <Button onClick={onFilterDone}>Done</Button>
    </>
  )
}

export default Filter
