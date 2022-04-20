import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: true,
    flex: 1
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: true,
    flex: 1
  },
  {
    field: 'age',
    headerName: 'Age',
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 110,
    editable: true,
    flex: 1
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    flex: 1
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 65 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        rowHeight={30}
        headerHeight={50}
        sx={{
            boxShadow: 2,
            border: 1,
            borderColor: 'primary.main',
            '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
            },
            '&.MuiDataGrid-root':{
                color: 'primary.main',
                backgroundColor: 'info.main',
            },
            '& .MuiDataGrid-columnsContainer': {
                borderBottom: 'info.main',
            },
            '& .super-app-theme--header': {
                backgroundColor: 'info.main',
                fontSize: 15,
                color: 'primary.main',
                '&:hover': {
                    borderBottomColor: 'info.main',
                },
            },
        }}
      />
    </div>
  );
}
