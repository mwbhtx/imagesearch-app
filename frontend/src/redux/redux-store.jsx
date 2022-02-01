import { configureStore } from '@reduxjs/toolkit'
import pexelSliceReducer from '../pages/image-search/pexel-slice.jsx'

export default configureStore({
    reducer: {
        pexel: pexelSliceReducer,
    }
})

