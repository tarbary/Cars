import { SET_YEAR, SET_PAGE } from '../constants/Page'


export function setYear(year) {

  return {
    type: SET_YEAR,
    payload: year
  }
  
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    payload: page
  }

}
