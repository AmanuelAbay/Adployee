import { AxiosResponse } from "axios";
import { takeEvery, put, call, take, StrictEffect } from "redux-saga/effects";
import employeeApi from "../../api/employee-api";
import { useAppDispatch } from "../hooks";
import { addEmployee, employee } from "../slice/employeeSlice";
import { PayloadAction } from "@reduxjs/toolkit";
// import { employee } from '../types/storeType';
import saga from "redux-saga";
// watchers

function* employeeSaga(): Generator<StrictEffect> {
  yield takeEvery(addEmployee, createEmployee);
  // yield takeEvery("getEmployee", getEmployee);
}

// workers

function* createEmployee(action: PayloadAction<employee>) {
  try {
    console.log("creating...");
    const response: AxiosResponse = yield call(employeeApi.post, "employee", action.payload);
    // console.log("this is called and saga is working well");
    switch (response.status) {
      case 200:
        console.log("done!")
        console.log(response.data);
      // yield put(response.data.data.employee);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getEmployee() {}

export default employeeSaga;
