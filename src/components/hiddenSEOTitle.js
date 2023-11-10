import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';



const StyledHiddenSEOTitle = styled(Typography)`
  && {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
`;

export default function HiddenSEOTitle() {
  return (
    <StyledHiddenSEOTitle variant='h1'>
        3D туры в Краснодаре и России, 360-градусные панорамы,
        аэросъемка и аэропанорамы, 3D панорамы для Яндекс
        Карт и Google Maps, 3D туры для веб-сайтов
    </StyledHiddenSEOTitle>
  )
}
