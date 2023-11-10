import React from 'react'
import { CITY } from './consts';
import { Formik, Form as FormikForm } from 'formik';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    MenuItem,
    Unstable_Grid2 as Grid
} from '@mui/material';
import TextInput from './textInput';
import SelectInput from './selectInput';
import FormHelperText from '@mui/material/FormHelperText';
import SubmitButton from './submitButton';
import { validationSchema } from './scheme';
import SubmitSnackbar from './submitSnackBar';



const rendeOption = (data) => {
    return data.map(item => {
        return <MenuItem key={item} value={item}>{item}</MenuItem>
    })
}

export default function Form() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
        <SubmitSnackbar open={open} setOpen={setOpen}/>
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                city: '',
                text: '',

            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                setOpen(true);
                resetForm()
            }}
        >
            <FormikForm autoComplete="off" noValidate>
                <Card >
                    <CardHeader
                        subheader=""
                        title="Отправьте нам заявку через эту форму и наш специалист свяжется с вами" />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid xs={12} md={6}>
                                <TextInput
                                    fullWidth
                                    label="Как к вам обращаться?"
                                    name="name"
                                    required
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextInput
                                    fullWidth
                                    label="Электронная почта"
                                    name="email"
                                    type='email'
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextInput
                                    fullWidth
                                    label="Номер телефона"
                                    name="phone"
                                    type='number'
                                    required
                                />
                            </Grid>
                            <Grid xs={12} md={6} sx={{ mt: -2.8 }}>
                                <SelectInput
                                    fullWidth
                                    label="Выберите город"
                                    name="city"
                                    options={rendeOption(CITY)}
                                />
                                <FormHelperText>Не нашли свой город? Укажите его в поле для заметок</FormHelperText>
                            </Grid>
                            <Grid xs={12} md={12}>
                                <TextInput
                                    fullWidth
                                    label="Ваши заметки"
                                    name="text"
                                    
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <SubmitButton/>
                </Card>
            </FormikForm>
        </Formik>
        </>
    )
}
