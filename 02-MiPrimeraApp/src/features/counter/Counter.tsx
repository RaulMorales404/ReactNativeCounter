import { createSlice, PayloadAction } from "@reduxjs/toolkit";

///creamos como se vera la informacion
interface typeCounter {
    counter: number,

}

///creamos el estado inicial de la informacion
const initialState: typeCounter = {
    counter: 0
}

const counterSlise = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { },
        decrement: (state) => { },
        reset: (state, action: PayloadAction<number>) => { },

    }
});

export const { increment, decrement, reset } = counterSlise.actions;
export default counterSlise.reducer;