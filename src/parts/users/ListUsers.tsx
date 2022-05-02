import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { AgGridReact } from 'ag-grid-react';

import { useAppSelector } from 'app/hooks';
import {
  selectUsers,
} from 'state/users/usersSlice';
import { NavLink } from 'react-router-dom';

function ActionsCellRenderer({ data }: any) {
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

      <button type="button" className="btn btn-sm btn-danger mx-2">
        <i className="fa-solid fa-trash-can" />
        {' '}
      </button>

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
