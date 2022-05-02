import React, {
  useEffect,
} from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  fetchUsersDataAsync,
  isLoading,
  selectUsers,
} from 'state/users/usersSlice';
import { toast } from 'react-hot-toast';

export default function ListUsers() {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsers);
  const isUsersLoading: boolean = useAppSelector<boolean>(isLoading);

  useEffect(() => {
    dispatch(fetchUsersDataAsync())
      .catch(() => toast.error(''));
  }, []);

  return (
    <h1>Welcome</h1>
  );
}
