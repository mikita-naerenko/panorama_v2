import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    isMainMenuOpen: false,
});



const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        setIsMainMenuOpen: (state, action) => {
            state.isMainMenuOpen = action.payload
        }
    },
}); 


const {actions, reducer} = mainPageSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.mainPage);


export const {
    setIsMainMenuOpen
} = actions;