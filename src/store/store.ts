import { configureStore } from '@reduxjs/toolkit'
import stepSlice from "./reducers/stepSlice.ts";
import userSlice from "./reducers/userSlice.ts";
import chatSlice from "./reducers/chatSlice.ts";

const store = configureStore({
    reducer: {
        stepSlice,
        userSlice,
        chatSlice,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;