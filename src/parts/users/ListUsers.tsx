import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { AgGridReact } from 'ag-grid-react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  fetchUsersDataAsync,
  isLoading,
  selectUsers,
} from 'state/users/usersSlice';
import { toast } from 'react-hot-toast';

export default function ListUsers() {
  const dispatch = useAppDispatch();
  const gridRef = useRef<any>();

  // States ...
  const [rowData, setRowData] = useState<any>();

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'id',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'email',
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
      field: 'avatar',
      filter: false,
      sortable: false,
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

  const onGridReady = useCallback((params) => {
    if (!users.length) {
      dispatch(fetchUsersDataAsync()).catch(() => toast.error(''));
    }
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  useEffect(() => {
    setRowData(users);
  }, [users]);

  return (
    <div
      className="container-fluid ag-theme-alpine pb-3"
      style={containerStyle}
    >
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
        onGridReady={onGridReady}
        onFirstDataRendered={onFirstDataRendered}
      />
    </div>
  );
}
