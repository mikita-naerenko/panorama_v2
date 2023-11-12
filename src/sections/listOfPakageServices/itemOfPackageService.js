import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PACKAGE_SERVICES } from './const.js'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


export default function ItemOfPackageService() {
    const [detailsButton, setDetailsButton] = useState([]);
    const detailsButtonHandler = (index) => {
        if (detailsButton.includes(index)) {
            setDetailsButton(detailsButton.filter((item) => item !== index));
        } else {
            setDetailsButton([...detailsButton, index]);
        }
    }
    return (
        <>
            {PACKAGE_SERVICES.map((item, i) => {
                return <Card sx={{ maxWidth: 350, mr: 2, mb: 2, position: 'relative', pb: 6 }} key={i}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img}
                            alt={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ height: 60 }} >
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, height: 85, '@media (max-height: 800px)': { height: 'auto' } }}>
                                {detailsButton.includes(i) ? item.description : `${item.description.slice(0, 100) + '...'}`}
                            </Typography>
                            {
                                detailsButton.includes(i) ?
                                    null :
                                    <>
                                        <Divider />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography gutterBottom variant="h6" component="div" >
                                                Цена:
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" >
                                                {item.price}₽
                                            </Typography>
                                        </Box>
                                        <Divider />
                                    </>
                            }

                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ position: 'absolute', bottom: 0 }}>
                        <Button size="small" color="secondary" onClick={() => detailsButtonHandler(i)}>
                            {detailsButton.includes(i) ? 'свернуть' : 'подробнее'}
                        </Button>
                        <Button size="small" color="secondary">
                            заказать
                        </Button>
                    </CardActions>
                </Card>
            })}
        </>

    )
}
