import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenModal } from '@/redux/mainSlice';



export default function SinglePortfolioList({currentPortfolioPage}) {

    const dispatch = useDispatch();
    const { openModal } = useSelector(state => state.main);

    const handleOpen = () => dispatch(setOpenModal(true));

    return ( currentPortfolioPage ?
        <ImageList 
                    sx={{ 
                            width: 'auto', 
                            height: 'auto', 
                            paddingBottom: 5, 
                            '@media (max-width: 600px)': { 
                                                            gridTemplateColumns: 'repeat(1, 1fr)!important;', 
                                                            pl: '30px', 
                                                            pr: '10px' 
                                                        } 
                        }}>
            {
                currentPortfolioPage.projectsSet.map(item => {
                   return <ImageListItem 
                                onClick={handleOpen} 
                                key={item.title} 
                                sx={{ 
                                        cursor: 'pointer',
                                        maxWidth: '450px', 
                                        m: 0.5, 
                                        filter: 'brightness(0.9)', 
                                        '&:hover': { filter: 'brightness(1.2)' } }}>

                        <img
                            // srcSet={item.thumbnail}

                            src={item.thumbnail}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.serviceSet.map(item => `• ${item} `)}
                        />

                    </ImageListItem>

                })
            }
        </ImageList> :
        null
    )
}
