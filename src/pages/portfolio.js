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


export default function portfolio() {
    
    const theme = useTheme();

    

  return (
    <main style={{height: '100%'}}>
      <HiddenSEOTitle/>
      <UseSetCurrentPageOnRefresh/>
      <MiniDrawer/>
      <Container disableGutters maxWidth='false' sx={{
                                      backgroundColor: `${theme.palette.secondary.main}`,
                                      width: '100%',
                                      height: '100%',
                                      
                                      
                                    }}>
        <PageTitle title={'портфолио'}/>
        <Grid container spacing={1} sx={{pl: LAYOUT_STYLES.padding.paddingPages.plMD}}>
          <Grid item sm={9} xs={12}>
            <PortfolioList/>
          </Grid>
          <Grid item sm={3} xs={12} >
            <PortfolioFilter/>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
