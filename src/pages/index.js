import Head from 'next/head'
import React from 'react';
import MainPage from '@/sections/mainPage/mainPage';
import HiddenSEOTitle from '../components/hiddenSEOTitle';


// const inter = Inter({ subsets: ['latin'] })



// const NoSSRMainSphere = dynamic(() => import('@/sections/mainPage/mainSphere/mainSphere'), {ssr: false})

export default function Home() {

  // const elementRef = useRef(null);
  // const [elementWidth, setElementWidth] = useState(0);
  // const dispath = useDispatch();
  // const { isMainMenuOpen } = useSelector(state => state.mainSlice);


  // useEffect(() => {
  //   // Function to update element width
  //   const updateElementWidth = () => {
  //     if (elementRef.current) {
  //       const width = elementRef.current.offsetWidth;
  //       setElementWidth(width);
  //     }
  //   };

  //   // Initial measurement
  //   updateElementWidth();

  //   // Attach a resize event listener to update width on window resize
  //   window.addEventListener('resize', updateElementWidth);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', updateElementWidth);
  //   };
  // }, []);

  // const handleClick = (e) => {
  //   if (elementRef.current && !elementRef.current.contains(e.target)) {
  //     dispath(setIsMainMenuOpen(false))
  //   }
  // }

  // useEffect(() => {
  //  document.addEventListener('mousedown', handleClick) 

  //  return () => {
  //   document.removeEventListener('mousedown', handleClick) 
  //  }
  // },[])


  


  return (
    <>
      <Head>
        <title>Panorama</title>
        <meta name="test" content="test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main >
        <HiddenSEOTitle/>
        <MainPage/>
      </main>
    </>
  )
}
