import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Autocomplete, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminApi from '../../../../api/adminApi';
import CreateProductModal from './Dialog';

export default function StickyHeadTable({ pageCategory, columns, tableName }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  const DeleteNotification = (rowData) => {
    Swal.fire({
      title: 'Ви впевнені?',
      text: 'Видалені дані не можливо буде повернути!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Так,видалити!',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
    }).then((result) => {
      if (result.value) {
        handleDeleteRow(rowData);
      }
    });
  };
  const handleDeleteRow = async (rowData) => {
    try {
      await AdminApi.deleteProduct(pageCategory, rowData);
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AdminApi.getAllProducts(pageCategory);
        const data = await response.data;
        console.log(data);
        setRows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageCategory, refreshKey]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box height={20} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            // filter((row) => row.name.toLowerCase().includes(filterValue.toLowerCase()))
            options={rows}
            sx={{ width: 300 }}
            // onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.model}
            renderInput={(params) => <TextField {...params} size="small" label="Search Products" />}
          />
          <Button variant="contained" endIcon={<AddCircleIcon />} onClick={() => setOpenModal(true)}>
            Додати
          </Button>
        </Stack>
        <TableContainer sx={{ maxHeight: 429, overflowY: 'auto', overflowX: 'auto' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ padding: '20px', textAlign: 'center' }}>
            {tableName}
          </Typography>
          <Divider />
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell key={'action'} align="left" style={{ minWidth: 100 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(startIndex, endIndex).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ maxWidth: '30%' }}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ maxWidth: '50%' }}>
                          {row[column.id]}
                        </TableCell>
                      );
                    })}
                    <TableCell align="left" key={row._id}>
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: '20px',
                            color: 'blue',
                            cursor: 'pointer',
                          }}
                          className="cursor-pointer"
                          // onClick={() => editUser(row.id)}
                          onClick={() => console.log(row._id)}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: '20px',
                            color: 'darkred',
                            cursor: 'pointer',
                          }}
                          onClick={() => DeleteNotification(row._id)}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <CreateProductModal
        open={openModal}
        handleClose={handleCloseModal}
        setkey={setRefreshKey}
        columns={columns}
        category={pageCategory}
      />
    </>
  );
}
