import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Link  from '@mui/material/Link';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function IframeYandex() {
  return (
    <Card>
        <CardContent >
       <iframe src="https://yandex.ru/map-widget/v1/org/sozdaniye_virtualnykh_3d_turov_dlya_biznesa/107287163042/reviews/?ll=38.983904%2C45.019412&z=18.15"  style={{minHeight: 400, minWidth: 400, width: '100%'}}></iframe>
        </CardContent>
    </Card>
  )
}
