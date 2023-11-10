import { useTrail, animated } from '@react-spring/web'
import { MAIN_MENU_ITEMS } from './constants'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import shortid from 'shortid';
import React from 'react';
import { StyledLink, StyledTypography } from './styledComponents.js'


export default function MainPageMenu() {

    const theme = useTheme();

    const menuItems = MAIN_MENU_ITEMS.map((item,i) => {

        return (
              <StyledLink href={item.link}>
                <Box sx={{ display: 'flex', 
                           alignItems: 'center', 
                           mt: 2,  
                         }}>
                    <Box sx={{ 
                               display: 'flex', 
                               alignItems: 'center', 
                               mt: 0.8, 
                               mr: 1 
                             }}>
                    {React.cloneElement(
                                        item.icon, 
                                        {sx: {color: `${theme.palette.secondary.contrastText}`, fontSize: `29px`, transition: 'color 0.3s'}} 
                    )}
                    </Box>
                    <StyledTypography 
                                      variant='h2' 
                                      align='center' 
                                      color={theme.palette.secondary.contrastText} 
                                    >
                      {item.title}
                    </StyledTypography>
                </Box>
              </StyledLink>
               )
    })

    const trail = useTrail(menuItems.length, {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      });

  return (
    <ul>         
      {trail.map((style, index) => (
        <animated.li 
                  key={shortid.generate()} 
                  style={style} 
                  onClick={() => {
                          }} >
          {menuItems[index]}

        </animated.li>
      ))}
    </ul>
  )
}
