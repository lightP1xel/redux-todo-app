import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { About, Home, TodosWrapper } from './pages'
import { Notification, NavBar } from './components'
import style from './style.module.css'

const App = () => {
  const routesConfig = [
    {key: 1, path: '/', exact: true, component: Home },
    {key: 2, path: '/todos', component: TodosWrapper},
    {key: 3, path: '/about', component: About},
  ]

  return (
    <div className={style.wrapper}>
      <BrowserRouter>
        <Notification>
          <NavBar />
          <Switch>
            {routesConfig.map(({ key, path, exact, component }) => <Route key={key} path={path} exact={exact} component={component} />)}
            <Redirect to='/' />
          </Switch>
        </Notification>
      </BrowserRouter>
    </div>
  )
}

export default App