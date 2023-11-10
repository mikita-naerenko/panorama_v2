import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { red } from '@mui/material/colors';
import { REVIEWS } from './consts';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider'






export default function ReviewList() {

    const theme = useTheme();

    return (
        <>
        <Typography variant='h2' sx={{color: theme.palette.secondary.contrastText, mb: 2, }}>
            Наши клиенты о нас:
        </Typography>
        <Box sx={{backgroundColor: theme.palette.secondary.contrastText, borderRadius: '8px',}}>
            
            {
                REVIEWS.map((item,i) => {
                    return <Card sx={{ maxWidth: 900, borderRadius: '8px', border: 'none', boxShadow: 'none' }} key={i}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }}>
                                {item.name.split(' ')[1][0]}
                            </Avatar>
                        }
                        title={item.name}
                        subheader={item.date}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.review}
                        </Typography>
                    </CardContent>
                    <Divider/>
                </Card>
                })
            }
        </Box>
        </>
    );
}