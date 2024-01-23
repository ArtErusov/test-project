import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initiakState: {
    counterTwo: 0,
    },
    reducers: {
        counterPlus (state, action) {
            state.counterTwo.push({
                counterTwo : (counterTwo + 1),
                // console.log('+1 проверка in Toolkit'),
            });
        },
        counterMinus (state, action) {},
    }, 
})