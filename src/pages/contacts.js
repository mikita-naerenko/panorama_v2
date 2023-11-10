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
import Form from '@/sections/form/form';
import ContactsCard from '@/components/contactsCard';
import IframeYandex from '@/components/iframeYandex';





export default function Contacts() {

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
                                    pb: 5,
                                    pl: '10%',
                                    pr: '5%',
                                    '@media (max-width: 700px)': {
                                        pl: '70px'
                                    }
                                    
                                    
                                  }}>
      <PageTitle title={'наши контакты'}/>
      <Grid container spacing={1} mb={1}>
        <Grid md={6} xs={12} item > 
            <ContactsCard/>
        </Grid>
        <Grid md={6} xs={12} item>
            <IframeYandex/>
        </Grid>
    </Grid>
      <Form/>
    
    </Container>
  </main>
  )
}
