import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Link  from '@mui/material/Link';
import  CardActions  from '@mui/material/CardActions';
import  Button  from '@mui/material/Button';





export default function ContactsCard() {
    return (
        <Card sx={{ minWidth: 275, height: '100%' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            </Typography>
            <Typography variant="h4" component="div">
            Digital агенство "Студия Панорама"
            </Typography>
            <Typography variant='h5' sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
            Г.Краснодар, ул.Ленина 92/2 , оф.4 
            </Typography>
            <Typography variant="h6">
            График пн-вс 9:00 - 19:00
            </Typography>
            <Typography variant="h6">
            Тел.1: <Link underline="hover" color='secondary' href={`tel:${88612428182}`}>8 (861) 242 - 81 - 82</Link>
            
            
            </Typography>
            <Typography variant="h6">
                Тел.2: <Link underline="hover" color='secondary' href={`tel:${89882428182}`}>8 (988) 242 - 81 - 82 (WhatsApp, Viber, Telegram)</Link>
            </Typography>
            <Typography variant="h6">
                Email: <Link underline="hover" color='secondary' href={`mailto:${'panoramakrasnodar360@gmail.com'}`}>panoramakrasnodar360@gmail.com</Link>
            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent: 'center'}}>
            <Button variant='contained'>
                <a href={`tel:${89882428182}`}>Обсудим ваш проект по телефону?</a>
            </Button>
          </CardActions>
        </Card>
      );
}
