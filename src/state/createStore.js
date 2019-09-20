import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SETGAMECODE':
      return {
        ...state,
        code: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  code: '',
}

export default () => createStore(reducer, initialState)
