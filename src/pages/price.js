import HiddenSEOTitle from "@/components/hiddenSEOTitle"
import { UseSetCurrentPageOnRefresh } from "@/customHooks/customHooks"
import MiniDrawer from "@/components/drawer/drawer"
import PageTitle from "@/components/pageTitle"
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles';
import ListOfPackageServices from "@/sections/listOfPakageServices/listOfPackageServices"
import { LAYOUT_STYLES } from "@/const/constants"
import Box from "@mui//material/Box"
import TableOfPrices from "@/sections/tableOfPrices/tableOfPrices"



export default function price() {

    const theme = useTheme();

    return (
        <main >
            <HiddenSEOTitle />
            <UseSetCurrentPageOnRefresh />
            <MiniDrawer />
            <Container disableGutters maxWidth='false' sx={{
                backgroundColor: `${theme.palette.secondary.main}`,
                width: '100%',
                height: '100%',


            }}>
            <Box sx={{pl: LAYOUT_STYLES.padding.paddingPages.plMD}}>
               <PageTitle title={'Наши услуги'} />
                <ListOfPackageServices/> 
                <TableOfPrices/>
            </Box>
                
            </Container>
        </main>
    )
}           
