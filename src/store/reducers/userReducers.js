import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  userlists: [],
  isloading: true,
  errormessage: {},
  total_pages: 0,
  page: 1,
  has_more: true,
};

const userlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.FETCH_USERS_REQUEST:
    return {
      ...state,
      isloading: true,
    }; 
  case actionTypes.FETCH_USERS_SUCCESS:
    // eslint-disable-next-line no-case-declarations
    let { page, total, total_pages, data } = action.payload;
    return {
      ...state,
      page: page,
      total_users: total,
      total_pages: total_pages,
      userlists: data,
      isloading: false,        
    };  
  case actionTypes.FETCH_USERS_FAILED:
    return {
      ...state,
      errormessage: action.payload,
      isloading: false,        
    };
  case actionTypes.LOAD_MORE_USERS:
    // let { page, userlists } = action.payload;
    return {
      ...state,
      page: action.payload.page,
      userlists: action.payload.userlists,
    };
  case actionTypes.NO_MORE_USERS:
    return {
      ...state,
      has_more: false,     
    };
  default:
    return state;
  }
};

export default userlistReducer;
