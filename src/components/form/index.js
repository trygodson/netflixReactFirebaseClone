import React from 'react';
import {Container, Error, Title, Text, TextSmall, Link, Input, Base, Submit} from './styles/form';


export default function Form({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
};

Form.Title = ({children, ...restProps})=>{
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Form.Error = ({children, ...restProps})=>{
    return(
        <Error {...restProps}>{children}</Error>
    )
}
Form.Title = ({children, ...restProps})=>{
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Form.Text = ({children, ...restProps})=>{
    return(
        <Text {...restProps}>{children}</Text>
    )
}
Form.TextSmall = ({children, ...restProps})=>{
    return(
        <TextSmall {...restProps}>{children}</TextSmall>
    )
}
Form.Link = ({children, ...restProps})=>{
    return(
        <Link {...restProps}>{children}</Link>
    )
}
Form.Input = ({children, ...restProps})=>{
    return(
        <Input {...restProps}>{children}</Input>
    )
}
Form.Base = ({children, ...restProps})=>{
    return(
        <Base {...restProps}>{children}</Base>
    )
}
Form.Submit = ({children, ...restProps})=>{
    return(
        <Submit {...restProps}>{children}</Submit>
    )
}