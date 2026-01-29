import { createSlice } from "@reduxjs/toolkit";
type Theme = "light" | "dark" | "OS default";
export interface CounterState {
  value: Theme,
  mode: "light" | "dark" ,
  next: Theme,
}
const initialState: CounterState = {
  value: localStorage.getItem("theme") as Theme,
  mode: window.matchMedia("(prefers-color-scheme: dark)").matches? "dark": "light",
  next: localStorage.getItem("theme") as Theme , 
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    system: (state) => {
      // console.log(state.value);
         document.documentElement.classList.remove("dark", "light");
        if (state.value==="OS default"|| !state.value ) {
          document.documentElement.classList.add(state.mode);
          localStorage.setItem("theme","OS default")
          state.value="OS default"
          if ( state.mode==="dark") {
          state.next="light"
        }else{
          state.next="dark"
        }
        }else{
          document.documentElement.classList.add(state.value);
          localStorage.setItem("theme",state.value)
          // state.value=state.value
          if ( state.value==="light") {
          state.next="dark"
          } else{
            // console.log(state.value,"0");
          if (state.value==="dark") {
            state.next="light";
          }else{
            state.next="OS default"
          } 
        }}
      },
      setTheme:(state)=>{
        // console.log("setTheme");
      document.documentElement.classList.remove("dark", "light");
      if (state.next==="OS default" || !state.next ) {
        document.documentElement.classList.add(state.mode);
        state.value="OS default";
        if ( state.mode==="dark") {
          state.next="light"
        }else{
          state.next="dark"
        }
      }else {
        state.value=state.next;
        document.documentElement.classList.add(state.next);
        if ( state.mode==="light") {
          state.next="light"
        }else {
          if (state.mode===state.next) {
            state.next="OS default";
          }else{
            state.next="dark"
          } 
        }
      } 
      localStorage.setItem("theme",state.value );
      }
  },
});

export const { setTheme,system } = themeSlice.actions;

export default themeSlice.reducer;
// import { system } from "./features/theme/themeSlice.ts";
import { useDispatch } from "react-redux";
export function Sys() {
    const dispatch = useDispatch();
  dispatch(system());
  
}