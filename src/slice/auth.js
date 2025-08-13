import {createSlice} from '@reduxjs/toolkit';
import {setItem} from '../helpers/persistant.store';

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state, action) => {
            state.isLoading = true;
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.user = action.payload;
            setItem('token', action.payload.token);
        },
        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state, action) => {
            state.loggedIn = false;
            state.user = null;
        }
    }
});

export const {
    signUserStart,
    signUserSuccess,
    signUserFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;