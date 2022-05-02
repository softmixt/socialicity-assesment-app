import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { AgGridReact } from 'ag-grid-react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  deleteUser,
  selectUsers,
} from 'state/users/usersSlice';
import { NavLink } from 'react-router-dom';

function ActionsCellRenderer({ data }: any) {
  const dispatch = useAppDispatch();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setShowConfirm(false);
      clearTimeout(myTimeout);
    }, 3000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [showConfirm]);

  return (
    <div className="d-flex justify-content-start align-items-center h-100">
      <NavLink to={`/customer/users/edit/${data.id}`} className="btn btn-sm btn-primary mx-2">
        <i className="fa-solid fa-user-pen" />
        {' '}
      </NavLink>
      <NavLink to={`/customer/users/view/${data.id}`} className="btn btn-sm btn-warning mx-2">
        <i className="fa-solid fa-eye" />
        {' '}
      </NavLink>

      {!showConfirm && (
      <button type="button" className="btn btn-sm btn-danger mx-2" onClick={() => setShowConfirm(true)}>
        <i className="fa-solid fa-trash-can" />
        {' '}
      </button>
      )}

      {showConfirm && (
      <button type="button" className="btn btn-sm btn-danger mx-2" onClick={() => dispatch(deleteUser(data.id))}>
        <i className="fa-solid fa-trash-can" />
        {' '}
        Confirm
      </button>
      )}

    </div>
  );
}

export default function ListUsers() {
  const gridRef = useRef<any>();

  // States ...
  const [rowData, setRowData] = useState<any>();

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'id',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'first_name',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'last_name',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'email',
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Actions',
      field: 'actions',
      sortable: false,
      filter: false,
      cellRenderer: ActionsCellRenderer,
    },

  ]);

  // Selectors ...
  const users = useAppSelector(selectUsers);

  const containerStyle = useMemo(() => ({
    height: '25rem',
    width: '100%',
  }), []);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  }), []);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  useEffect(() => {
    setRowData(users);
  }, [users]);

  return (
    <div className="container-fluid ag-theme-alpine pb-3" style={containerStyle}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        rowDragManaged
        rowDragMultiRow
        defaultColDef={defaultColDef}
        animateRows
        pagination
        paginationPageSize={5}
        paginationAutoPageSize
        onFirstDataRendered={onFirstDataRendered}
      />
    </div>
  );
}
