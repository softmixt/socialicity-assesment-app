import React from 'react';

import ListUsers from 'parts/users/ListUsers';
import { NavLink } from 'react-router-dom';

export default function UsersListPage(props: any) {
  return (
    <div className="row">

      <div className="w-100 d-flex flex-column flex-md-row justify-content-end">

        <NavLink to="/customer/users/new" className="btn btn-sm btn-outline-secondary mb-3">
          <i className="fa-solid fa-user-plus" />
          {' '}
          New User
        </NavLink>

      </div>
      <ListUsers />
    </div>
  );
}
