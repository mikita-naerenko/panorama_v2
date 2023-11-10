
import { ReactPhotoSphereViewer, AutorotatePlugin } from 'react-photo-sphere-viewer';
import React, { useRef } from 'react';
import styles from './style.module.scss'


const MainSphere = () => {
    const pSRef = useRef();

    const plugins = [
        [AutorotatePlugin, {
            autostartDelay: 0,
            autorotatePitch: '-20deg',
            autorotateSpeed: '0.4rpm'
        }]
    ]
    


  return (
    <div className={styles.mainSphere}>
      <ReactPhotoSphereViewer
        ref={pSRef}
        src="sphere-main.jpeg"
        height={"100vh"}
        width={"100%"}
        littlePlanet={false}
        plugins={plugins}
        navbar={false}
        canvasBackground={true}
        moveSpeed={1}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default MainSphere;