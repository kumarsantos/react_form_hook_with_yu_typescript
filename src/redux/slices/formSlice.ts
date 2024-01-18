import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface formDataState {
    name?: string;
    gender?: string;
    email?: string;
    step?: number;
    govIdType?: string;
    dob?: string;
    mobile?: string;
    govId?: string;

    address?: string;
    state?: string;
    city?: string;
    country?: string;
    pincode?: string;
}

const initialState: formDataState = {
    name: '',
    gender: '',
    step: 1,
    govIdType: '',
    dob: '',
    mobile: '',
    govId: '',
    address: '',
    state: '',
    city: '',
    country: '',
    pincode: '',
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        storeFirstStep: (state, action: PayloadAction<formDataState>) => {
            state.name = action.payload.name;
            state.dob = action.payload.dob;
            state.gender = action.payload.gender;
            state.mobile = action.payload.mobile;
            state.govId = action.payload.govId;
            state.govIdType = action.payload.govIdType;
        },
        storeSecondStep: (state, action: PayloadAction<formDataState>) => {
            state.address = action.payload.address;
            state.state = action.payload.state;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.pincode = action.payload.pincode;
        },
        handleStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        reset: (state) => {
            state.name = '';
            state.gender = '';
            state.dob = '';
            state.step = 1,
                state.mobile = '',
                state.govId = '',
                state.govIdType = '',
                state.address = '',
                state.state = '',
                state.city = '',
                state.country = '',
                state.pincode = ''
        }
    }
})

export const { storeFirstStep, handleStep, reset, storeSecondStep } = formDataSlice.actions
export default formDataSlice.reducer