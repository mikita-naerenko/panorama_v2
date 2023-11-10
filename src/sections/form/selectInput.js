import {
    Select,
    InputLabel,
    Typography,
  } from '@mui/material';
  import { useField } from 'formik';








  const SelectInput = ({...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
      <InputLabel>{props.label}</InputLabel>
      <Select {...field}{...props}>{props.options}</Select>
       {meta.touched && meta.error ? (
      <Typography color="error">{meta.error}</Typography>
    ) : null}
      </>
    )
  }

  export default SelectInput;