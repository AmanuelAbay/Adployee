import { AxiosResponse } from "axios";
import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import employeeApi from "../../api/employee-api";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addEmployee,
  employee,
  getEmployeesFailure,
  getEmployeesSuccess,
} from "../slice/employeeSlice";

function* employeeSaga(): Generator<StrictEffect> {
  yield takeEvery("employees/getEmployeesFetch", getEmployeesFetch);
}

function* getEmployeesFetch(action: PayloadAction<employee>) {
  try {
    const { data }: AxiosResponse = yield call(employeeApi.get, "employee");
    yield put(getEmployeesSuccess(data));
  } catch (error) {
    yield put(getEmployeesFailure((error as Error).message));
  }
}

export default employeeSaga;
