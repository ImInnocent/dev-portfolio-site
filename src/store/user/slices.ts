import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetUserNamePayload } from './types'

export interface UserState {
  name: string,
};

const initialState: UserState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state: UserState, action: PayloadAction<SetUserNamePayload>) => {
      state.name = action.payload.name;
    },
  },
})

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;