import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { About, Home, APITodos, TodosWrapper } from './pages'
import { Notification, NavBar } from './components'

const App = () => {
  const routesConfig = [
    {key: 1, path: '/', exact: true, component: Home },
    {key: 2, path: '/todos', component: TodosWrapper},
    {key: 3, path: '/about', component: About},
    {key: 4, path: '/APITodos', component: APITodos},
  ]

  return (
      <BrowserRouter>
        <Notification>
          <NavBar />
          <Switch>
            {routesConfig.map(({ key, path, exact, component }) => <Route key={key} path={path} exact={exact} component={component} />)}
            <Redirect to='/' />
          </Switch>
        </Notification>
      </BrowserRouter>
  )
}

export default App