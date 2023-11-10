import * as Yup from 'yup';


export const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Имя должно содержать не менее 2 символов').required('Обязательное поле'),
    email: Yup.string().email("Некорректный адрес электронной почты"),
    phone: Yup.string().min(10, 'Телефон должен содержать не менее 10 целых чисел.').required('Обязательное поле'),
    text: Yup.string().min(5, "Минимум 5 символов")
  });