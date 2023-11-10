import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ItemOfPackageService from './itemOfPackageService';
import FactCheckIcon from '@mui/icons-material/FactCheck';





export default function ListOfPackageServices() {
    const theme = useTheme();
    return (
        <Container sx={{ '@media (max-width: 500px)': { pl: '50px', pr: '10px' } }}>
          <Box display={'flex'}>
              <FactCheckIcon sx={{color: 'white', fontSize: '58px', mt: -0.5}}/>
              <Typography variant='h3' fontSize={'20px'} mb={5} color={theme.palette.secondary.contrastText}>
                Мы готовы предоставить вам индивидуальные пакеты услуг, разработанные с учетом ваших уникальных потребностей:
            </Typography>
          </Box>
            
            <Box display={'flex'} flexWrap='wrap' justifyContent={'center'} >
              <ItemOfPackageService/>
            </Box>
        </Container>
    )
}
