import { configureStore } from "@reduxjs/toolkit";
import  calcSlice  from "../features/calcs/calcSlice";
import counterSlice  from "../features/counter/counterSlice";
import themeSlice  from "../features/theme/themeSlice";
import mobileMenu  from "../features/mobileMenu/mobileMenu";
import  filterSlice  from "../features/filter/Slice";

export const store = configureStore({
    reducer:{
        calc:calcSlice,
        counter:counterSlice,
        theme: themeSlice,
        menu:mobileMenu,
        filter:filterSlice,
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch