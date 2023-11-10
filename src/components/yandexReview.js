import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';


export default function YandexReview() {
    const theme = useTheme();
    return (
        <Box>

        <Typography variant='h2' sx={{color: theme.palette.secondary.contrastText, mb: 2}}>
            Отзывы с яндекс карт:
        </Typography>
        <div style={{ maxWidth: '900px',minHeight: '1300px', height: '1300px', overflow: 'hidden', position: 'relative' }}>
            <iframe style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', boxSizing: 'border-box' }} src="https://yandex.ru/maps-reviews-widget/107287163042?comments">
            </iframe>
            <a href="https://yandex.ru/maps/org/sozdaniye_virtualnykh_3d_turov_dlya_biznesa/107287163042/" target="_blank">
                Создание виртуальных 3Д-туров для бизнеса на карте Краснодара — Яндекс Карты
            </a>
        </div>
        </Box>
    )
}
