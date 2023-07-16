import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserSlice {
    code: string,
    nickname: string,
}

const initialState: IUserSlice  = {
    code: '',
    nickname: '',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCode (state, action: PayloadAction<string>) {
            state.code = action.payload;
        },
        setNickname (state, action: PayloadAction<string>) {
            state.nickname = action.payload;
        },
    }
})

export const { setCode, setNickname } = userSlice.actions;
export default userSlice.reducer