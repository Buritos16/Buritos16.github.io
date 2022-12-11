import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    price: 0,
    counter: 0
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        add: (state, action) => {
            state.data.push({
                image: action.payload.img,
                name: action.payload.name,
                price: action.payload.price,
                counter: 1
            })
            state.counter += 1
            state.price += Number(action.payload.price)
        },
        remove: (state, action) => {

        },
    },
})

export const shopReducer = shopSlice.reducer

export const {add} = shopSlice.actions