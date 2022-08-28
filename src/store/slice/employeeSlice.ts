import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface employee {
  id?: string;
  profile_img?: string;
  full_name: string;
  date_of_birth: string;
  gender: string;
  salary: number;
  email?: string;
  address?: string;
  joined_date?: string;
  position?: string;
}

interface EmployeeState {
  employees: employee[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getEmployeesFetch: (state) => {
      state.isLoading = true;
    },
    getEmployeesSuccess: (state, action: PayloadAction<employee[]>) => {
      state.employees = action.payload;
      state.isLoading = false;
    },
    getEmployeesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addEmployee: (state, action: PayloadAction<employee>) => {
      state.employees.push(action.payload);
    },
  },
});

export const {
  addEmployee,
  getEmployeesSuccess,
  getEmployeesFailure,
  getEmployeesFetch,
} = employeeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;
