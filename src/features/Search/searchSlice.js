import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: null,
        data: [],
        error: '',
        showSearchResults: false
    },
    reducers: {
        searchRequest: state => {
            state.loading = true;
        },
        searchSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.showSearchResults = true
        },
        searchFailure: (state, action) => {
            state.error = action.payload
        },
        hideSearchResults: (state) => {
            state.showSearchResults = false
        }

    },
});

export const { searchRequest, searchSuccess, searchFailure, hideSearchResults } = searchSlice.actions;



export default searchSlice.reducer;
