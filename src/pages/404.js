import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';

const Page = () => (
  <>
    <Head>
      <title>
        404 | Devias Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center'
            }}
          >
            <img
              alt="Under development"
              src="./error-404.png"
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3, color: 'white' }}
            variant="h3"
          >
            404: Похоже, что этой страницы не существует
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="body1"
            sx={{color: 'white' }}
          >
            Либо вы выбрали какой-то сомнительный маршрут, либо пришли сюда по ошибке.
             Что бы это ни было, попробуйте использовать навигацию
          </Typography>
          <Button
            component={NextLink}
            href="/"
            sx={{ mt: 3 }}
            variant="contained"
          >
            Вернуться на гланую страницу
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;