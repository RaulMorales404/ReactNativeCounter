import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../features/counter/Counter';

const Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>