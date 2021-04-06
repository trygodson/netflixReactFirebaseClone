import React, {useState} from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
            {/* eslint-disable-next-line*/}
import {Background, PlayButton,  Profile, Picture, Search, SearchIcon, SearchInput, Link, Dropdown, Group, FeatureCallOut, ButtonLink, Text, Frame, Container, Feature, Logo} from './styles/header'


export default function Header({bg = true, children, ...restProps}){
    return  bg ? <Background  {...restProps}>{children}</Background> : children
};

Header.Frame = ({children, ...restProps})=>{
    return(
        <Container {...restProps}>{children}</Container>
    )
}
Header.Group = ({children, ...restProps})=>{
    return(
        <Group {...restProps}>{children}</Group>
    )
}
Header.Link = ({children, ...restProps})=>{
    return(
        <Link {...restProps}>{children}</Link>
    )
}
Header.Feature = ({children, ...restProps})=>{
    return(
        <Feature {...restProps}>{children}</Feature>
    )
}
Header.ButtonLink = ({children, ...restProps})=>{
    return(
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}
Header.OptForm = ({children, ...restProps})=>{
    return(
        <Frame {...restProps}>{children}</Frame>
    )
}
Header.Text = ({children, ...restProps})=>{
    return(
        <Text {...restProps}>{children}</Text>
    )
}
Header.Profile = ({children, ...restProps})=>{
    return(
        <Profile {...restProps}>{children}</Profile>
    )
}
Header.TextLink = ({children, ...restProps})=>{
    return(
        <Link {...restProps}>{children}</Link>
    )
}
Header.FeatureCallOut = ({children, ...restProps})=>{
    return(
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}
Header.Dropdown = ({children, ...restProps})=>{
    return(
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}
Header.PlayButton = ({children, ...restProps})=>{
    return(
        <PlayButton {...restProps}>{children}</PlayButton>
    )
}
Header.Picture = ({ src, ...restProps})=>{
    return(
        <Picture {...restProps} src={src}/>
    )
}

Header.Logo = ({to, ...restProps})=>{
    return(
        <ReactRouterLink to={to}>
            <Logo  {...restProps}/>
        </ReactRouterLink>
    )
}

Header.Search = ({searchTerm, setSearchTerm, ...restProps})=>{
    const [searchActive, setSearchActive] = useState(false)
    return(
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive((searchActive) => !searchActive)}>
                <img src='./images/icons/search.png' alt='search'/>
            </SearchIcon>
            <SearchInput 
            valur={searchTerm} 
            onChange={({target})=> setSearchTerm(target.value)} 
            placeHolder='Search'
            active={searchActive}
            />
        </Search>
    )
}