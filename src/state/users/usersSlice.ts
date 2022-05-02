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
    deleteUser: (state, action) => {
      state.data = state.data.filter((item) => (item.id !== action.payload));
    },
    updateUser: (state, action) => {
      const userData = action.payload;
      const users = state.data;
      const index = users.findIndex((u) => u.id === userData.id);
      users[index] = userData;
      state.data = users;
    },
    addUser: (state, action) => {
      const allUsersInMemory = state.data;
      const maxUserID = Math.max(...state.data.map((o) => o.id));
      allUsersInMemory.push({ ...action.payload, id: maxUserID + 1 });

      state.data = allUsersInMemory;
    },
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

export const { deleteUser, updateUser, addUser } = usersSlice.actions;

// Selectors ...
export const selectUsers = (state: RootState) => state.users.data;
