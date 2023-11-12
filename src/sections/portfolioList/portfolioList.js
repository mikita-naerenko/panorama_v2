import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useSelector, useDispatch } from 'react-redux';
import { TEST_PORTFOLIO_DATA } from './constants';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { setCurrentPortfolioPage } from '@/redux/mainSlice';





const StyledLink = styled(Link)`
text-decoration: none;
color: rgba(0,0,0,0.6);
&:hover  {
  color: #000000;
}
&:hover svg {
  color: #000000;
}
`;


export default function PortfolioList() {

    const dispatch = useDispatch();

    const { currentFilterCategory, currentFilterType } = useSelector(state => state.portfolioFilter)

    const handleClick = (page) => {
        dispatch(setCurrentPortfolioPage(page))
    }

    const filterArray = (arr, selectedType, selectedCategory) => {
        const filteredListByCategory = arr.filter(item => (
            selectedCategory !== 'allCategory' ? item.category === selectedCategory : true
        ));
        return filteredListByCategory.filter(item => (
            selectedType !== 'all' ? item.type === selectedType : true
        ));
    }

    const filterdList = filterArray(TEST_PORTFOLIO_DATA, currentFilterType, currentFilterCategory)


    return (
        <ImageList sx={{ width: 'auto', height: 'auto', paddingBottom: 5, '@media (max-width: 600px)': { gridTemplateColumns: 'repeat(1, 1fr)!important;', pl: '30px', pr: '10px' } }}>
            {
                filterdList.map(item => {
                    return <StyledLink
                        href={item.title.split(' ').join('').toLowerCase()}
                        onClick={() => handleClick(item)}
                        key={item.thumbnail}
                    >

                        <ImageListItem sx={{height: '100%!important', cursor: 'pointer', m: 0.5, filter: 'brightness(0.9)', '&:hover': { filter: 'brightness(1.2)' } }}>

                            <img
                                // srcSet={item.thumbnail}

                                src={item.thumbnail}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.category}
                            />

                        </ImageListItem>
                    </StyledLink>
                })
            }
        </ImageList>
    );
}
