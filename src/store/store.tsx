import {
  applyMiddleware,
  configureStore,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import employeesReducer from "./slice/employeeSlice";
// import { all, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import sagas from "../store/sagas/saga";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  employeesReducer,
applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
