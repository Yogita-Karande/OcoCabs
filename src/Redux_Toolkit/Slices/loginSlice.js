import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null
}
const loginSlice = createSlice({
    name:'token',
    initialState,
    isAuthenticated :false,
    reducers:{
        setToken(state, action) {
            state.token = action.payload;
            state.isAuthenticated = true;
          },
          clearToken(state) {
            state.token = null;
            state.isAuthenticated = false;
          },
    }
})

export const { setToken, clearToken } = loginSlice.actions;
export default loginSlice.reducer;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;