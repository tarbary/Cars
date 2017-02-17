import { SET_YEAR, SET_PAGE } from '../constants/Page'

const initialState = {
  year: 2016,
  page: null,
  photos: []
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }
    case SET_PAGE:
      return { ...state, page: action.payload }
    
    default:
      return state
  }

}
