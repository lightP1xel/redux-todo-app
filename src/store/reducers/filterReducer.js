const initialFilter = {
  filter: 'All',
}

const CHANGEFILTER = 'CHANGEFILTER'

export const changeFilter = (filter) => {
  return {
    type: CHANGEFILTER,
    payload: filter,
  }
}

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case CHANGEFILTER: {
      return {
        ...state,
        filter: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default filterReducer
