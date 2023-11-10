import  Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';


export default function Slogan() {
  const theme = useTheme();

  return (
    <Box>
        <Typography variant='h2' align='center' color={theme.palette.secondary.contrastText} >
            ваш бизнес в трех измерениях
        </Typography>
    </Box>
  )
}
