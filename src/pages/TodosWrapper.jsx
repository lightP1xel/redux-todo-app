import React from 'react'
import Filter from '../components/Filter'
import AddTodo from '../components/AddTodo/AddTodo'
import Todos from '../components/Todos'
import { TodosModal } from '../components/TodosModal/TodosModal'
import { Route } from 'react-router'



export const TodosWrapper = (props) => {
  return (
    <div>
      <Filter />
      <AddTodo />
      <Todos match={props.match.path}/>
      <Route path='/todos/:id'><TodosModal /></Route>
    </div>
  )
}

