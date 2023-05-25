import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  credentials: { username: string; password: string } | null;
}

const initialState: UserState = {
  credentials: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.credentials = action.payload;
    },
  },
});

export const { setUserCredentials } = userSlice.actions;

export default userSlice.reducer;
