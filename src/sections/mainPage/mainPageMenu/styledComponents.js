import { styled } from '@mui/system';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography'





export const StyledLink = styled(MuiLink)`
text-decoration: none;
&:hover h2 {
  color: #E7D322;
}
&:hover svg {
  color: #E7D322;
}
`;
export const StyledTypography = styled(Typography)`
transition: color 0.3s;
`;