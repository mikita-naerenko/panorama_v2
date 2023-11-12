import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    currentPage: 'main',
    currentPortfolioPage: '',
    openModal: false,
});



const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
            sessionStorage.setItem('currentPage', action.payload)
        },
        setCurrentPortfolioPage: (state, action) => {
            state.currentPortfolioPage = action.payload
            sessionStorage.setItem('currentPortfolioPage', JSON.stringify(action.payload))
        },
        setOpenModal: (state, action) => {
            state.openModal = action.payload
        }
    },
}); 


const {actions, reducer} = mainSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.main);


export const {
    setCurrentPage,
    setCurrentPortfolioPage,
    setOpenModal,
} = actions;