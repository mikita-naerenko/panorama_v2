import Container from '@mui/material/Container'
import Typography  from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import PageTitle from '@/components/pageTitle';
import MiniDrawer from '@/components/drawer/drawer';
import { UseSetCurrentPageOnRefresh } from '@/customHooks/customHooks';
import HiddenSEOTitle from '@/components/hiddenSEOTitle';
import PortfolioList from '@/sections/portfolioList/portfolioList';
import PortfolioFilter from '@/sections/portfolioFilter/portfolioFilter';
import { LAYOUT_STYLES } from '@/const/constants';
import YandexReview from '@/components/yandexReview';
import ReviewList from '@/sections/reviews/reviewList';





export default function Reviews() {

  const theme = useTheme();
  console.log(theme);

  return (
    <main style={{height: '100%'}}>
    <HiddenSEOTitle/>
    <UseSetCurrentPageOnRefresh/>
    <MiniDrawer/>
    <Container disableGutters maxWidth='false' sx={{
                                    backgroundColor: `${theme.palette.secondary.main}`,
                                    width: '100%',
                                    height: '100%',
                                    pb: 5,
                                    pl: '10%',
                                    pr: '5%',
                                    '@media (max-width: 700px)': {
                                        pl: '70px'
                                    }
                                    
                                    
                                  }}>
      <PageTitle title={'отзывы о нас'}/>
      <Grid container spacing={1}> 
        <Grid item md={6} sm={12}>
          <ReviewList/>
        </Grid>
        <Grid item md={6} sm={12}>
          <YandexReview/>
        </Grid>
      </Grid>
      
      
    </Container>
  </main>
  )
}
