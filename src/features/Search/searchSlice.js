import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: null,
        data: [],
        error: ''
    },
    reducers: {
        searchRequest: state => {

            state.loading = true;
        },
        searchSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        searchFailure: (state, action) => {
            state.error = action.payload
        }

    },
});

export const { searchRequest, searchSuccess, searchFailure } = searchSlice.actions;



export default searchSlice.reducer;
