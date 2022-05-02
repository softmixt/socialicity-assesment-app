import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { CustomerTopMenu } from 'parts/menu/CustomerTopMenu';
import BaseFooter from 'parts/footer/BaseFooter';
import { fetchUsersDataAsync, selectUsers } from 'state/users/usersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

export default function CustomerLayout() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsersDataAsync()).catch(() => toast.error(''));
    }
  }, [dispatch, users]);

  return (
    <>
      <header>
        <CustomerTopMenu />
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <div className="b-example-divider" />
      <div className="container">
        <BaseFooter />
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}
