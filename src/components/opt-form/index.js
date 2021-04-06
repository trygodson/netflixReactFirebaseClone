import React from 'react';
import {Input, Container, Button, Text} from './styles/opt-form'

export default function OptForm ({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
};

OptForm.Input = ({ ...restProps})=>{
    return(
        <Input {...restProps}/>
    )
}
OptForm.Button = ({children, ...restProps})=>{
    return(
        <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" alt='try it now'/></Button>
    )
}

OptForm.Text = ({children, ...restProps})=>{
    return(
        <Text {...restProps}>{children}</Text>
    )
}