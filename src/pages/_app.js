import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/theme';





export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
    
  )
  
  
}
