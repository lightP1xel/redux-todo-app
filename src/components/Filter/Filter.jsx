import { Button } from 'antd'
import { changeFilter } from '../../store/reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const onChangeFilter = (filter) => {
    dispatch(changeFilter(filter))
  }

  return (
    <>
      <label>Show </label>
      <Button type="primary" onClick={() => onChangeFilter('All')}>
        All
      </Button>
      <Button onClick={() => onChangeFilter('Active')}>Active</Button>
      <Button onClick={() => onChangeFilter('Done')}>Done</Button>
    </>
  )
}

export default Filter
