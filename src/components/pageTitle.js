import { styled } from '@mui/system';
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';




export const StyledPageTitle = styled(Typography)`
    padding-top: 5%;
    padding-left: 15%;
    text-transform: uppercase;
    text-shadow: 0px 0px 30px #FFFFFF;
    margin-bottom: 20px;
    @media (max-width: 600px) {
      padding-left: 20%;
    } 

`;


export default function PageTitle({title}) {

  const theme = useTheme();

  return (
    <StyledPageTitle variant='h2' color={theme.palette.secondary.contrastText}>{title}</StyledPageTitle>
  )
}
