import { configureStore } from '@reduxjs/toolkit';
import searchSlice from "../features/Search/searchSlice"

export default configureStore({
    reducer: {
        Search: searchSlice
    },
});  