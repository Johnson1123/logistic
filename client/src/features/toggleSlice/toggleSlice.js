import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
    menuValue: false,
    closeValue: false,
    dashboardToggle: 'Dashboard',
    login: false,
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
        } 
    }
})

export default toggleSlice.reducer;
export const { toggleMenu, closeToggle, closeSearch, handleDashboard} = toggleSlice.actions;