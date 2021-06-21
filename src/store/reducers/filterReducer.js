const initialFilter = {
  filter: 'ALL',
}

const ALL = 'ALL'
const ACTIVE = 'ACTIVE'
const DONE = 'DONE'

export const filterAll = () => ({
  type: ALL,
})

export const filterActive = () => ({
  type: ACTIVE,
})

export const filterDone = () => ({
  type: DONE,
})

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case ALL: {
      return {
        ...state,
        filter: ALL,
      }
    }
    case ACTIVE: {
      return {
        ...state,
        filter: ACTIVE,
      }
    }
    case DONE: {
      return {
        ...state,
        filter: DONE,
      }
    }
    default: {
      return state
    }
  }
}

export default filterReducer
