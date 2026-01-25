import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}
export const calcSlice=createSlice({
    name: "calc",
    initialState,
    reducers: {
        plus:(state,action:PayloadAction<number>)=>{
            console.log("calling the reducer for active plus",state,action);
        }
    }
})
export const {plus}=calcSlice.actions
export default calcSlice.reducer