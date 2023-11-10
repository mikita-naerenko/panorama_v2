import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMainMenuOpen } from './mainPageSlice';


export default function MainNavButton() {

    const dispath = useDispatch();
    const { isMainMenuOpen } = useSelector(state => state.mainPageSlice);

    const handleClick = () => {
        dispath(setIsMainMenuOpen(!isMainMenuOpen))
    }

  const theme = useTheme();

  return (
    <IconButton 
                sx={{color: theme.palette.secondary.contrastText, fontSize: '70px',}} 
                onClick={handleClick}
                >
        <PowerSettingsNewIcon fontSize='50px' />
    </IconButton>
  )
}
