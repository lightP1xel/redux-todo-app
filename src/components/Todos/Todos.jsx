import { useCallback } from 'react'
import { Table, Popover } from 'antd'
import { useSelector } from 'react-redux'
import { getFilter, getTodos } from '../../store/selectors/selectors'
import { ActionsDropdown } from '../ActionsDropdown/ActionsDropdown'



export const Todos = ({ match }) => {
  const todos = useSelector(getTodos)
  const filter = useSelector(getFilter)

  const filteredTodos = useCallback(() => {
    switch(filter) {
      case 'ACTIVE':
        return todos.filter((item) => !item.isDone)
      case 'DONE':
        return todos.filter(({isDone}) => isDone)
      default:
        return todos
    }
  }, [filter, todos])

  const dataSource = [
    ...filteredTodos().map((todo) => {
      return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        timeOfCreate: todo.timeOfCreate,
      }
    }
    )
  ]

  const columns = [
    {
      title: 'Title', 
      key: 'title', 
      dataIndex: 'title',
      sorter: (a, b) => a.title - b.title,
      render: ( title, { timeOfCreate }) => <Popover content={ `Time of create: ${timeOfCreate}` } title={title}>{title}</Popover>,
    },
    {
      title: 'Description', 
      key: 'description', 
      dataIndex: 'description',
    },
    {
      title: 'Actions', 
      key: 'actions', 
      dataIndex: 'actions',
      render: (_, { id }) => <ActionsDropdown id={id} match={match} />
    },
  ]

  return (
      <Table
        dataSource={dataSource} 
        columns={columns} 
        pagination = {{ defaultPageSize: '5', showSizeChanger: true, pageSizeOptions: [5, 10, 15, 20], position: ['bottomCenter'] }}
      />
  )
}