import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    currentFilterType: 'all',
    currentFilterCategory: 'allCategory',
});



const portfolioFilterSlice = createSlice({
    name: 'portfolioFilter',
    initialState,
    reducers: {
            setCurrentFilterType: (state, action) => {
                state.currentFilterType = action.payload
            },
            setCurrentFilterCategory: (state,action) => {
                state.currentFilterCategory = action.payload
            }
        },
    
}); 


const {actions, reducer} = portfolioFilterSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.portfolioFilter);


export const {
    setCurrentFilterType,
    setCurrentFilterCategory
} = actions;