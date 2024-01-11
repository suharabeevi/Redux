import { configureStore } from '@reduxjs/toolkit'
import CouterReducer  from '../reducer/reducer'
export default configureStore({
    reducer:{
        counter:CouterReducer,

    }
})
