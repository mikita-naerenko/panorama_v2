import { ReactPhotoSphereViewer, AutorotatePlugin } from 'react-photo-sphere-viewer';
import React, { useRef } from 'react';
import Box from '@mui/material/Box'



const Sphere = ({link}) => {
    const pSRef = useRef();

    const plugins = [
        [AutorotatePlugin, {
            autostartDelay: 0,
            autorotatePitch: '-20deg',
            autorotateSpeed: '0.4rpm'
        }]
    ]
  return (
    <Box sx={{  width: '300px',
                height: '200px',
                '@media (min-width: 500px)': {width: '400px', height: '300px'}, 
                '@media (min-width: 600px)': {width: '500px', height: '350px'},
                '@media (min-width: 700px)': {width: '550px', height: '400px'},
                '@media (min-width: 900px)': {width: '700px', height: '500px'},
                '@media (min-width: 1200px)': {width: '900px', height: '700px'},
                '@media (min-width: 1400px)': {width: '1100px', height: '700px'},
            
            }}
                
                >
      <ReactPhotoSphereViewer
        ref={pSRef}
        src={link}
        height={'100%'}
        width={'100%'}
        littlePlanet={false}
        plugins={plugins}
        canvasBackground={true}
        moveSpeed={1}
      ></ReactPhotoSphereViewer>
    </Box>
  );
}

export default Sphere;