import React, { useEffect, useMemo, useState } from 'react';

import ListUsers from 'parts/users/ListUsers';
import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectUsers, UserDataState } from '../../../state/users/usersSlice';

export default function UsersViewPage(props: any) {
  const params = useParams();
  const { userId } = params;

  const [selectedUser, setSelectedUser] = useState<UserDataState | null>();

  const users: UserDataState[] = useAppSelector(selectUsers);

  useEffect(() => {
    const userData = users.filter((u:UserDataState) => (u.id === Number(userId)));
    setSelectedUser(userData[0]);
  }, [users]);

  if (!selectedUser) {
    return null;
  }

  return (
    <div className="row">
      <div className="col">
        <div
          className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2">
              ID:
              {selectedUser.id}
            </strong>
            <h3 className="mb-0">
              {selectedUser.first_name}
              ,
              {' '}
              {selectedUser.last_name}
            </h3>
            <div className="mb-1 text-muted">{selectedUser.email}</div>
          </div>
          <div className="col-auto d-none d-lg-block">

            <img src={selectedUser.avatar} className="rounded mx-auto d-block" alt={selectedUser.first_name} />

          </div>
        </div>
      </div>
    </div>
  );
}
