import React from 'react'
import { Route, Switch } from 'react-router'
import { AddTodo, Filter, Todos, Modals } from '../components'

export const TodosWrapper = ({ match }) => {
  return (
    <>
      <Filter />
      <AddTodo />
      <Todos match={match.path} />
      <Switch>
        <Route path={['/todos/:id', '/todos/create-todo']}><Modals /></Route>
      </Switch>
    </>
  )
}

