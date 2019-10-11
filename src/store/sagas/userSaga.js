import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export default function* userSaga() {
  yield takeLatest("USERS_REQUEST", userLists);
  yield takeLatest("LOAD_MORE_USERS_REQUEST", loadMoreUsers);
}   

function getUsersAPI(page) {
  console.log('page', page);
  return axios.request({
    method: 'get',
    url: `https://reqres.in/api/users?per_page=3&page=${page}`,
  });
}    
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

function* userLists(action){
  const { page } = action.payload;
  try {
    yield put({ type: "FETCH_USERS_REQUEST" });
    const response = yield call(getUsersAPI, page);

    yield delay(1500); // Add a delay for testing purposes
    yield put({ type: "FETCH_USERS_SUCCESS", payload: response.data });
    
  } catch (error) {
    yield put({ type: "FETCH_USERS_FAILED", payload: error.response });
  }
}

function* loadMoreUsers(action){
  try {
    
    const { total_pages, page, userlists } = action.payload;

    if(page != total_pages) {
      console.log(action.payload.page + 1)
      const response = yield call(getUsersAPI, action.payload.page + 1);

      const updatedUserLists = {
        ...action.payload, 
        page: action.payload.page + 1, 
        userlists: [...response.data.data, ...userlists].sort((a, b) => a.id - b.id)
      };

      console.log('load more', updatedUserLists);
      yield delay(1500); // Add a delay for testing purposes
      //yield put({ type: "FETCH_USERS_SUCCESS", payload: response.data });
      yield put({ type: "LOAD_MORE_USERS", payload: updatedUserLists });
    } else {
      yield put({ type: "NO_MORE_USERS" });
    }
  } catch (error) {
    yield put({ type: "FETCH_USERS_FAILED", payload: error.response });
  }  
}
