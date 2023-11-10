import dynamic from 'next/dynamic';
import Grid from '@mui/material/Unstable_Grid2';
import MainLogo from './mainLogo';
import Slogan from './slogan';
import Box from '@mui/material/Box'
import React, { useRef, useEffect, useState } from 'react';
import MainNavButton from './mainNavButton';
import MainPageMenu from './mainPageMenu/mainPageMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMainMenuOpen } from './mainPageSlice';



const NoSSRMainSphere = dynamic(() => import('./mainSphere/mainSphere'), {ssr: false})



export default function MainPage() {

  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

  const dispath = useDispatch();
  const { isMainMenuOpen } = useSelector(state => state.mainPageSlice);

  useEffect(() => {
    // Function to update element width
    const updateElementWidth = () => {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
      }
    };

    // Initial measurement
    updateElementWidth();

    // Attach a resize event listener to update width on window resize
    window.addEventListener('resize', updateElementWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateElementWidth);
    };
  }, []);


  const handleClick = (e) => {
    if (elementRef.current && !elementRef.current.contains(e.target)) {
      dispath(setIsMainMenuOpen(false))
    }
  }

  useEffect(() => {
   document.addEventListener('mousedown', handleClick) 

   return () => {
    document.removeEventListener('mousedown', handleClick) 
   }
  },[])


  return (
    <Box sx={{position: 'relative'}}
             onClick={handleClick}
        >
          <Grid 
                ref={elementRef}
                container 
                spacing={0}
                direction='column'
                sx={{position: 'absolute', zIndex: 1, width: '50%', top: '30%', left: `calc(50% - ${elementWidth / 2}px)`}}
          >
            <Grid>
                <MainLogo/>
            </Grid>
            <Grid>
                <Slogan/>
            </Grid>
            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
              {isMainMenuOpen ? <MainPageMenu/> : <MainNavButton/>}
            </Grid>
          </Grid>
          <NoSSRMainSphere/>
        </Box>
  )
}
