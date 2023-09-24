import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkCookies } from "../../helpers";

interface IUserSlice {
  token: string;
  nickname: string;
  email: string;
  statusAuthorization: boolean;
}

const initialState: IUserSlice = {
  token: checkCookies("token")!,
  nickname: checkCookies("nickname")!,
  email: checkCookies("email")!,
  statusAuthorization: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setCode(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    setStatusAuthorization(state, action: PayloadAction<boolean>) {
      state.statusAuthorization = action.payload;
    },
  },
});

export const { setCode, setNickname, setEmail, setStatusAuthorization } = userSlice.actions;
export default userSlice.reducer;
