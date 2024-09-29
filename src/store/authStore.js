import { configureStore, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null
        }
    }
})


const store = configureStore({
    reducer: { auth: authSlice.reducer }
})

export const authActions = authSlice.actions;
export default store;