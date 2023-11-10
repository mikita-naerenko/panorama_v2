import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SavingsIcon from '@mui/icons-material/Savings';
import WidgetsIcon from '@mui/icons-material/Widgets';



export const MAIN_MENU_ITEMS = [
    {
        title: 'главное меню',
        icon: <WidgetsIcon />,
        link: '/'
    },
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


export const LAYOUT_STYLES = {
    padding: {
        paddingPages: {
            plMD: '8%',
            plLG: '10%',
            plXL: '10%',
            plXS: '10%',
        }
    }
}