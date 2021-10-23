import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { middleware } from './middleware'

const enhancer = composeWithDevTools(applyMiddleware(middleware))

export const store = createStore(rootReducer, JSON.parse(localStorage.getItem('state')) || undefined, enhancer)
