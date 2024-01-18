import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DataSet {
    name?: string;
    gender?: string;
    email?: string;
    step?: number;
}

interface AllDataSet {
    record: DataSet[]
}

const initialState: AllDataSet = {
    record: []
}

export const allDataSlice = createSlice({
    name: 'allDataSet',
    initialState,
    reducers: {
        createData: (state, action: PayloadAction<DataSet>) => {
            state.record.push(action.payload);
        }
    },
})

export const { createData } = allDataSlice.actions
export default allDataSlice.reducer