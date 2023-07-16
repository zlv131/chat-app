import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IStepSlice {
    steps: number[],
    currentStep: number,
}

const initialState: IStepSlice  = {
    steps: [1, 2, 3],
    currentStep: 0,
};

const stepSlice = createSlice({
    name: 'stepSlice',
    initialState,
    reducers: {
        setCurrentStep (state, action: PayloadAction<number>) {
            state.currentStep = action.payload;
        },
    }
})

export const { setCurrentStep } = stepSlice.actions;
export default stepSlice.reducer