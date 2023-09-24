import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IChatSlice {
    userMessage: string,
    listMessages: null | [],
}

const initialState: IChatSlice  = {
    userMessage: '',
    listMessages: null,
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setUserMessage (state, action: PayloadAction<string>) {
            state.userMessage = action.payload;
        },

        setListMessages (state, action: PayloadAction<[]>) {
            state.listMessages = action.payload;
        },

    }
})

export const { setUserMessage, setListMessages } = chatSlice.actions;
export default chatSlice.reducer