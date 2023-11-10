import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SavingsIcon from '@mui/icons-material/Savings';



export const MAIN_MENU_ITEMS = [
    {
        title: 'портфолио',
        icon: <BusinessCenterIcon />,
        link: 'portfolio'
    },
    {
        title: 'услуги и цены',
        icon: <SavingsIcon />,
        link: 'price'
    },
    {
        title: 'отзывы о нас',
        icon: <ReviewsIcon />,
        link: 'reviews'
    },
    {
        title: 'контакты',
        icon: <ConnectWithoutContactIcon />,
        link: 'contacts'
    }
]