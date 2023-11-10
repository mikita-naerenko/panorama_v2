import MapIcon from '@mui/icons-material/Map';
import WebIcon from '@mui/icons-material/Web';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import BorderAllIcon from '@mui/icons-material/BorderAll';



export const FILTER_TYPE = [
    {
        title: "Все проекты",
        type: 'all',
    },
    {
        title: "Рестораны и ночные клубы",
        type: 'restaurant',
    },
    {
        title: "Отели и базы отдыха",
        type: 'hotel',
    },
    {
        title: "Недвижимость",
        type: 'realestate',
    },
    {
        title: "Автосалоны",
        type: 'carmall',
    },
    {
        title: "Торговые центры",
        type: 'mall',
    },
    {
        title: "Салоны красоты",
        type: 'beauty',
    },

]

export const FILTER_CATEGORY = [
    {
        title: 'все категории',
        type: 'allCategory',
        icon: <BorderAllIcon/>
    },
    {
        title: '360-градусные панорамы',
        type: '360degreePanoramas',
        icon: <ThreeDRotationIcon/>
    },
    {
        title: '3D панорамы для Яндекс Карт и Google Maps',
        type: '3dToursForMap',
        icon: <MapIcon/>
    },
    {
        title: '3D туры для веб-сайтов',
        type: '3dToursForWebsite',
        icon: <WebIcon/>
    }
]