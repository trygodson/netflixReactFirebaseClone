import React from 'react';
import { Container, Title, SubTitle } from './styles/features'

export default function Features({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
};


Features.Title = ({children, ...restProps})=>{
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Features.SubTitle = ({children, ...restProps})=>{
    return(
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}