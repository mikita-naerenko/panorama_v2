import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import TocIcon from '@mui/icons-material/Toc';
import Box from '@mui/material/Box';

export default function TableOfPrices() {
    const theme = useTheme();
    return (
        <Container sx={{ mb: 5, '@media (max-width: 500px)': { pl: '50px', pr: '10px' } }}>
            <Box display={'flex'} mt={5}>
                <TocIcon sx={{ color: 'white', fontSize: '40px', mt: -1 }} />
                <Typography variant='h3' fontSize={'20px'} mb={5} color={theme.palette.secondary.contrastText}>
                    Наши услуги и их примерная стоимость
                </Typography>
            </Box>
            <TableContainer component={Paper} sx={{ maxWidth: 1000, m: '0 auto', '@media (max-width: 750px)': { maxWidth: '600px', pl: '50px', pr: '10px' } }}>
                <Table sx={{ minWidth: 650, '@media (max-width: 750px)': { minWidth: '300px' } }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="center">Стоимость</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Размещение панорам на сервисе бронирования Booking
                            </TableCell>
                            <TableCell align="center">FREE</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                3D-тур  ДЛЯ САЙТА  с добавлением фото, видео
                            </TableCell>
                            <TableCell align="center">3000</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Аэропанорама 360
                            </TableCell>
                            <TableCell align="center">3000</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Видеосъемка с квадрокоптера в формате 4K (без монтажа)
                            </TableCell>
                            <TableCell align="center">от 2000</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Съёмка и создание видеоролика для бизнеса
                            </TableCell>
                            <TableCell align="center">от 15000</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Интерьерные фото (для гостиниц, ресторанов, недвижимости)
                            </TableCell>
                            <TableCell align="center">от 350</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Фуд съёмка для Яндекс еды
                            </TableCell>
                            <TableCell align="center">от 500</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Предметная фотосъемка товаров в 360 градусов (3D)
                            </TableCell>
                            <TableCell align="center">от 1200</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
