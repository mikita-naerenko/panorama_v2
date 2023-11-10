import {
    Typography,
    TextField,
  } from '@mui/material';
  import { useField } from 'formik';



  const TextInput = ({...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
      <TextField {...field}{...props} />
       {meta.touched && meta.error ? (
      <Typography color="error">{meta.error}</Typography>
    ) : null}
      </>
    )
  }

  export default TextInput;