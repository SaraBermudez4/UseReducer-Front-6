import { types } from "../types/types";

export const initialState = 10

export const init = (value) => {
    return parseInt(value)
}

export const CounterReducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return state + 1

        case types.decrement:
            return state - 1

        case types.reset:
            return init(initialState)

        default:
            return state;
    }
}