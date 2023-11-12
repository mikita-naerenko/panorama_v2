import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import PageTitle from '@/components/pageTitle';
import MiniDrawer from '@/components/drawer/drawer';
import { UseSetCurrentPageOnRefresh } from '@/customHooks/customHooks';
import HiddenSEOTitle from '@/components/hiddenSEOTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPortfolioPage } from '@/redux/mainSlice';
import SinglePortfolioList from '@/sections/singlePortfolioList/singlePortfolioList';
import ModalProject from '@/sections/singlePortfolioList/modalProject';





export default function SinglePortfolioPage() {

    const { currentPortfolioPage } = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentPortfolioPage) {

            dispatch(setCurrentPortfolioPage(JSON.parse(sessionStorage.getItem('currentPortfolioPage'))))
        }
    }, [])



    const theme = useTheme();
    return (
        <main
            style={{
                height: '1200px',
                backgroundImage: ` url(${currentPortfolioPage.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: `${theme.palette.secondary.main}`,
                backgroundBlendMode: 'soft-light',
                backgroundAttachment: 'scroll'
            }}>
            <HiddenSEOTitle />
            <UseSetCurrentPageOnRefresh />
            <MiniDrawer />
            <Container disableGutters maxWidth='false' sx={{
                width: '100%',
                height: '100%',
                pb: 5,
                pl: '10%',
                pr: '5%',
                '@media (max-width: 700px)': {
                    pl: '70px'
                }


            }}>
                <PageTitle title={currentPortfolioPage.title} />
                <SinglePortfolioList currentPortfolioPage={currentPortfolioPage} />
                {currentPortfolioPage ? <ModalProject currentPortfolioPage={currentPortfolioPage}/> : null}
                {/* <Grid container spacing={1}>
                    <Grid item md={6} sm={12}>

                    </Grid>
                    <Grid item md={6} sm={12}>

                    </Grid>
                </Grid> */}


            </Container>
        </main>
    )
}
