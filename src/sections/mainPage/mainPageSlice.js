import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    isMainMenuOpen: false,
});



const mainSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {
        setIsMainMenuOpen: (state, action) => {
            state.isMainMenuOpen = action.payload
        }
    },
}); 


const {actions, reducer} = mainSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.mainPageSlice);


export const {
    setIsMainMenuOpen
} = actions;