
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MAIN_MENU_ITEMS } from "@/const/constants";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/mainSlice';
import shortid from 'shortid';
import Link from 'next/link';
import { DRAWER_STYLE } from './const';



const drawerWidth = 240;

const StyledLink = styled(Link)`
text-decoration: none;
color: rgba(0,0,0,0.6);
&:hover  {
  color: #000000;
}
&:hover svg {
  color: #000000;
}
`;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispath = useDispatch();
  const { currentPage } = useSelector(state => state.main)


  const handleClick = (e,link) => {
    if (link !== currentPage) {
        dispath(setCurrentPage(link))
    }
  }

  const handleClickOnToggle = () => {
    setOpen(!open);
  }

  const handleMouseEnter = (event) => {
    // Your code to handle the mouse enter event goes here
    setOpen(true);
  };

  const handleMouseOver = (event) => {
    setOpen(false);
  }


  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOver}>
      <Drawer variant="permanent" open={open} sx={{'.MuiDrawer-paper': {backgroundColor: `${theme.palette.primary.main}`}}}>
      <div style={{backgroundColor: `${theme.palette.primary.main}`, height: '100vh'}}>
        <DrawerHeader >
          <IconButton onClick={handleClickOnToggle} >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{pt: '50%'}}>
       
          {MAIN_MENU_ITEMS.map(item => (
            <StyledLink 
                        key={shortid.generate()} 
                        href={item.link} 
                        onClick={(e) => handleClick(e,item.link)}
                        color={DRAWER_STYLE.staticButton}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: currentPage === item.link ? DRAWER_STYLE.activeButton : null,
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0,  }} />
                </ListItemButton>
                </ListItem>
            </StyledLink>
          ))}
        </List>
        
        </div>
      </Drawer>
      </div>
    </Box>
  );
}