import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { NavBar } from './components/NavBar/index'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { APITodos } from './pages/APITodos'
import { TodosWrapper } from './pages/TodosWrapper'





const App = () => {
  const routesConfig = [
    {id: 1, path: '/', exact: true, component: Home },
    {id: 2, path: '/todos', component: TodosWrapper},
    {id: 3, path: '/about', component: About},
    {id: 4, path: '/APITodos', component: APITodos},
  ]

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          {routesConfig.map((config) => <Route key={config.id} path={config.path} exact={config.exact} component={config.component} />)}
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App