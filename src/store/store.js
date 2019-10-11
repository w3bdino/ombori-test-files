import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/rootReducer';
import rootSaga from "./sagas/rootSagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
