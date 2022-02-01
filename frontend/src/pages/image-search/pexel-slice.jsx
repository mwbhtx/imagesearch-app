import {createSlice, current} from '@reduxjs/toolkit';

// Create the Pexel Slice of the Redux Store
const pexelSlice = createSlice({
    name: 'pexel',      // give a name for the slice in the store
    initialState: {     // give an initial state for the slice
        value: {}
    },
    reducers: {         // give the available reducer actions to modify state
        replacePexelObject(state, action) {
            state.value = action.payload;
        },
    }
})

export default pexelSlice.reducer;  // for use when creating store
export const { replacePexelObject } = pexelSlice.actions; // for use by components to update store value

