import { types } from "../types/types";

export const login = (name) => ({
    type: types.login,
    payload: {
        name
    }
})

export const logout = () => ({
    type: types.logout
})

// const action = {
//     type: types.login,
//     payload: {}
// }