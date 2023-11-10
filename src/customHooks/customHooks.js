import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '@/redux/mainSlice';



export  function UseSetCurrentPageOnRefresh () {
    const dispatch = useDispatch();
    useEffect(() => {
        const storedValue = sessionStorage.getItem('currentPage');
        if (storedValue !== null) {
            dispatch(setCurrentPage(storedValue))
        }
    })
    
}