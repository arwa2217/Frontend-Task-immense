import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
    name: "userDetailList",
    initialState: {
        userInfo: [],
    },
    reducers: {
        // users
        addUsers: (state, action) => {
            state.userInfo?.push(action?.payload);
        },
        updateUser: (state, action) => {
            const userId = state.userInfo?.findIndex(user => user?.id === action?.payload?.id);
            if (userId !== -1) {
                state.userInfo[userId] = action?.payload; 
            }
        },
            deleteUser: (state, action) => {
            state.userInfo = state.userInfo.filter(
                (users) => users?.id !== action.payload);
        },
       
    }
});
export const { addUsers,updateUser,deleteUser} = userDetailSlice.actions;
export default userDetailSlice.reducer;