import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenModal } from '@/redux/mainSlice';
import dynamic from 'next/dynamic';


const Sphere = dynamic(() => import('./sphere'), { ssr: false })
// import Sphere from './sphere';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalProject({ currentPortfolioPage }) {

  const dispatch = useDispatch();
  const { openModal } = useSelector(state => state.main)

  const handleClose = () => dispatch(setOpenModal(false));

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentPortfolioPage.projectsSet[0].title}
          </Typography>
          {currentPortfolioPage ? <Sphere link={currentPortfolioPage.projectsSet[0].link} /> : null}

        </Box>
      </Modal>
    </div>
  )
}
