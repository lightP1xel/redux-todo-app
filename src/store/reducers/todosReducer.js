const initialState = {
  items: [],
}

const ADDTODO = 'ADDTODO'
const DELETETODO = 'DELETETODO'
const TOGGLEDONETODO = 'TOGGLEDONETODO'
const CHANGEFILTER = 'CHANGEFILTER'

export const addtodo = (name) => ({
  type: ADDTODO,
  payload: name,
})

export const deletetodo = (id) => ({
  type: DELETETODO,
  payload: id,
})

export const toggleDoneTodo = (id) => ({
  type: TOGGLEDONETODO,
  payload: id,
})

export const changeFilter = (filter) => ({
  type: CHANGEFILTER,
  payload: filter,
})

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO: {
      const newTodo = {
        id: new Date().valueOf().toString(),
        name: action.payload,
        isDone: false,
      }
      return {
        ...state,
        items: [newTodo].concat(state.items),
      }
    }
    case DELETETODO: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }
    case TOGGLEDONETODO: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            }
          }
          return item
        }),
      }
    }
    default: {
      return state
    }
  }
}

export default todosReducer
