import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
)
