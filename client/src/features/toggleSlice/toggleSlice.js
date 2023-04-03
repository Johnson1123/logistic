import { createSlice } from '@reduxjs/toolkit'
import SignUp from '../../pages/SignUp/SignUp'

const initialState  = {
    menuValue: false,
    closeValue: false,
    dashboardToggle: 'Dashboard',
    login: false,
    dashboarMenu: false,
    role: false,
    user: false,
    signUp: false
}
const toggleSlice = createSlice({
    name: 'toggleMenu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menuValue ? state.menuValue = false : state.menuValue = true
        },
        closeToggle: (state) => {
            state.menuValue = false
        },
        closeSearch: (state) => {
            state.closeValue ? state.closeValue = false : state.closeValue = true
        },
        handleDashboard: (state, action) => {
            state.dashboardToggle = action.payload;
        },
        handleMenuClose: (state) => {
            state.dashboarMenu = false
        },
        handleMenuOpen: (state) => {
            state.dashboarMenu = true
        },
        userActive: (state) => {
            state.user = true
        },
        userInActive: (state) => {
            state.user = false
        },
        startSignUp: (state) => {
            state.signUp = true
        },
        endSignUp: (state) => {
            state.signUp = false
        }
    }
})

export default toggleSlice.reducer;
export const { toggleMenu, closeToggle, startSignUp, endSignUp, userInActive, userActive, closeSearch, handleDashboard, handleMenuClose, handleMenuOpen} = toggleSlice.actions;