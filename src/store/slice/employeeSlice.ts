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
}

// Define the initial state using that type
const initialState: EmployeeState = {
  employees: [],
};

interface updateInterface {
  id: string;
  employee: employee;
}

export const employeeSlice = createSlice({
  name: "employees",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<updateInterface>) => {
      // state.value -= 1;
      state.employees.map((employee, index) => {
        if (employee.id === action.payload.id) {
          state.employees[index].full_name = action.payload.employee.full_name;
        }
      });
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;
