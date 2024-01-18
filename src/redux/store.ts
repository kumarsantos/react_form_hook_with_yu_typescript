import { configureStore } from '@reduxjs/toolkit'
import { formDataSlice } from './slices/formSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { allDataSlice } from './slices/allDataSlice';

export const store = configureStore({
    reducer: {
        formEnterData: formDataSlice.reducer,
        allData: allDataSlice.reducer
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;