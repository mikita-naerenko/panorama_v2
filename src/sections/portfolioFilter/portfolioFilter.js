import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { FILTER_TYPE, FILTER_CATEGORY } from './constants';
import Divider  from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFilterType, setCurrentFilterCategory } from './portfolioFilterSlice'


export default function PortfolioFilter() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const dispath = useDispatch();
  const { currentFilterCategory, currentFilterType } = useSelector(state => state.portfolioFilter)



  const theme = useTheme();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSelectedCategory = (event, index) => {
    setSelectedCategory(index)
  }

  const handleClickOnFilterType = (filter) => {
    if (currentFilterType !== filter) {
      dispath(setCurrentFilterType(filter))
    }
  }

  const handleClickOnFilterCategory = (filter) => {

    if (currentFilterCategory !== filter) {
      dispath(setCurrentFilterCategory(filter))
    }
  }

  return (
    <Box sx={{ width: '100%', '@media (max-width: 600px)': { pl: '30px', pr: '10px'}}}>
      <List component="nav" sx={{color: '#ffffff', }}>
            {FILTER_CATEGORY.map((item,i) => {
                return (
                <ListItemButton
                    key={item.type}
                    selected={selectedCategory === i}
                    onClick={(event) =>{ 
                                          handleSelectedCategory(event, i)
                                          handleClickOnFilterCategory(item.type)
                                        }}
                    sx={{
                        color: theme.palette.secondary.contrastText,
                        '&.Mui-selected': {
                        backgroundColor: 'transparent',
                        color: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                        }
                        },
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                        }
                    }}
                    >
                <ListItemText primary={item.title}/>
                </ListItemButton>
                )
            })}
      </List>
      <Divider variant='middle' sx={{backgroundColor: '#ffffff'}}/>
      <List component="nav"  sx={{color: '#ffffff'}}>
        {FILTER_TYPE.map((item,i) => {
            return (
                <ListItemButton
                    key={item.type}
                    selected={selectedIndex === i}
                    onClick={(event) => {
                                          handleListItemClick(event, i)
                                          handleClickOnFilterType(item.type)
                                        }}
                    sx={{
                        '&.Mui-selected': {
                        backgroundColor: 'transparent',
                        color: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                        }
                        },
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                        }
                    }}
                    >
                    <ListItemText primary={item.title} />
                </ListItemButton>
            )
        })}

      </List>
    </Box>
  );
}