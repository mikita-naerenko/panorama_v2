import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function PortfolioList() {




    return (
        <ImageList sx={{ width: 'auto', height: '1000px', paddingBottom: 5, '@media (max-width: 600px)': { gridTemplateColumns: 'repeat(1, 1fr)!important;', pl: '30px', pr: '10px' } }}>
            {
                testPortfolioData.map(item => {
                    return <ImageListItem key={item.thumbnail} sx={{ m: 0.5, filter: 'brightness(0.9)', '&:hover': { filter: 'brightness(1.2)' } }}>
                        <img
                            // srcSet={item.thumbnail}
                            src={item.thumbnail}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.category.map(i => i)}
                        // actionIcon={
                        //   <IconButton
                        //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        //     aria-label={`info about ${item.title}`}
                        //   >
                        //     <InfoIcon />
                        //   </IconButton>
                        // }
                        />
                    </ImageListItem>
                })
            }
        </ImageList>
    );
}



const testPortfolioData = [
    {
        thumbnail: './panoramas/Paranal Residencia/vlt-jfs_6684.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/Paranal Residencia/ESO_Hotel_Paranal_360_Marcio_Cabral_Chile_02-CC.jpeg'
            }
        ],
        title: 'Paranal Residencia',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/Desert Resort/Arizona-valley-drought-peterperhacpixabay.webp',
        projectsSet: [
            {
                panorama360: './panoramas/Desert Resort/eso1841y.jpeg'
            }
        ],
        title: 'Desert Resort',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/ESO Headquarters/170818014-cc.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/ESO Headquarters/PANO0001-2_PANO0034-2-34-images-2-CC.jpeg'
            }
        ],
        title: 'ESO Headquarters',
        description: '',
        category: ['360 panorama'],
        type: 'realestate',
    },
    {
        thumbnail: './panoramas/La Silla Style/92311920eb9fa7e6a194e1f0f295c6fb.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/La Silla Style/potw1932a.jpeg'
            }
        ],
        title: 'La Silla Style',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/supernova center/upr_IMG_5573-CC.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/supernova center/2018_04_21_ES_Supernova_VT_Void-CC.jpeg'
            }
        ],
        title: 'supernova center',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/ALMA OSF canteen /base-canteen-pan2.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/ALMA OSF canteen /base-canteen-pan2.jpeg'
            }
        ],
        title: 'ALMA OSF canteen',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/ALMA Santiago Central Office/ann1083b.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/ALMA Santiago Central Office/eso-alma-access-pano.jpeg'
            }
        ],
        title: 'ALMA Santiago Central Office',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/Library in Chili/1200px-Biblioteca_nacional_1.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/Library in Chili/library-pano.jpeg'
            }
        ],
        title: 'Library in Chili',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/Panoramic view of Paranal/Njn5MA2ZndJAdMLitHXbEa.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/Panoramic view of Paranal/res-mount-sunrise-pan-extended.jpeg'
            }
        ],
        title: 'Panoramic view of Paranal',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
    {
        thumbnail: './panoramas/La Residencia/Comillas_-_Palacio_de_Sobrellano_09.jpeg',
        projectsSet: [
            {
                panorama360: './panoramas/La Residencia/meeting-room-pano.jpeg'
            }
        ],
        title: 'La Residencia',
        description: '',
        category: ['360 panorama'],
        type: 'hotel',
    },
];