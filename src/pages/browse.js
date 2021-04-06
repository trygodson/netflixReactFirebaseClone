import React from 'react';
import {UseContent} from '../hooks'
import SelectionFilter from '../utils/selection-filter';
import {BrowseContainer} from '../container/browse'

export default function Browse ({children, ...restProps}){
    // we need series and films
    const {series} = UseContent('series')
    const {films} = UseContent('films')
    // we need the slides
    const slides = SelectionFilter({series, films})
    //pass it to the slides container
    return(
        <BrowseContainer slides={slides}>

        </BrowseContainer>
    )
};