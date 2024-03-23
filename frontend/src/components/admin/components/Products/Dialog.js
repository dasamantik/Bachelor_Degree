import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import * as React from 'react';
import Swal from 'sweetalert2';
import AdminApi from '../../../../api/adminApi';

export default function CreateProductModal({ open, handleClose, columns, category, setkey }) {
  const [formData, setFormData] = React.useState({});
  const isFormValid = Object.values(formData).every((value) => value);
  const handleChange = (id, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleCreateProduct = (formData) => {
    console.log(formData);
    handleClose();
    Swal.fire({
      title: 'Створення товару',
      text: `Ви впевнені, що хочете створити цей товар?: ${formData.model}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Так',
      showLoaderOnConfirm: true,
      cancelButtonText: 'Ні',
      preConfirm: async (data) => {
        try {
          const response = await AdminApi.createProduct(category, formData);
          console.log(response);
          if (response.statusText !== 'OK') {
            return Swal.showValidationMessage(`
               Щось пішло не так, будь ласка спробуйте пізніше
            `);
          }
        } catch (error) {
          console.log(error);
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Товар успішно створено!', '', 'success');
        setkey((prevKey) => prevKey + 1);
      }
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>Створити товар</Grid>
          <Grid item>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Заповніть інформацію про новий товар:</DialogContentText>
        <Grid container spacing={2}>
          {columns.map(
            (column) =>
              column.id !== '_id' && (
                <Grid item xs={column.id === 'model' || column.id === 'brand' ? 12 : 6} key={column.id}>
                  <TextField
                    label={column.label}
                    variant="outlined"
                    fullWidth={column.id === 'model' || column.id === 'brand'}
                    value={formData[column.id] || ''}
                    onChange={(e) => handleChange(column.id, e.target.value)}
                  />
                </Grid>
              )
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleCreateProduct(formData)}
          variant="contained"
          color="primary"
          disabled={!isFormValid}
        >
          Створити
        </Button>
      </DialogActions>
    </Dialog>
  );
}
