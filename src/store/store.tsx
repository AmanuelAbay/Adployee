import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import employeesReducer from "./slice/employeeSlice";
import createSagaMiddleware from "redux-saga";
import sagas from "../store/sagas/saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: [saga],
});

saga.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
