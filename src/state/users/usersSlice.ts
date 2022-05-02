import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllUsersData } from 'services/usersAPI';
import ProgressBar from 'app/utils/ProgressBar';
import { RootState } from 'state/store';

// Types ...
export interface UserDataState {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserState {
  data: UserDataState[];
  status: 'idle' | 'loading' | 'failed';
}

// Reducers ...
const initialState: UserState = {
  data: [],
  status: 'idle',
};

// Actions ...
export const fetchUsersDataAsync = createAsyncThunk(
  'users/fetchData',
  async () => fetchAllUsersData(),
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  /*  setPage: (state, action) => {
      state.page = action.payload;
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersDataAsync.pending, (state) => {
        state.status = 'loading';
        ProgressBar.start();
      })
      .addCase(fetchUsersDataAsync.fulfilled, (state, action: PayloadAction<UserDataState[]>) => {
        state.status = 'idle';
        state.data = action.payload;
        ProgressBar.done();
      });
  },
});

export default usersSlice.reducer;

// export const { setPage } = usersSlice.actions;

// Selectors ...
export const selectUsers = (state: RootState) => state.users.data;
export const isLoading = (state: RootState) => state.users.status === 'loading';
