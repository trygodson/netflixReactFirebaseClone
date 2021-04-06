import React, {useState, useContext, createContext} from 'react';
import { Container, Title, Header, Inner, Frame, Body, Item } from './styles/accordion';


const ToggleContext = createContext()

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle ({children, ...restProps}) {
    return(
        <Title {...restProps}>{children}</Title>
    )   
}
Accordion.Frame = ({children, ...restProps})=>{
    return(
        <Frame {...restProps}>{children}</Frame>
    )   
}
Accordion.Inner = ({children, ...restProps})=>{
    return(
        <Inner {...restProps}>{children}</Inner>
    )   
}
Accordion.Item = ({children, ...restProps})=>{
    const [toggleShow, setToggleShow] = useState(false)
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )   
}
Accordion.Header = ({children, ...restProps})=>{
    const {toggleShow,setToggleShow} = useContext(ToggleContext)
    return(
        <Header onClick={()=>setToggleShow((toggleShow)=> !toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (<img src='images/icons/close-slim.png' alt='close'/>) : (<img src='images/icons/add.png' alt='open   '/>)}
        </Header>
    )   
}

Accordion.Body = ({children, ...restProps})=>{
    const {toggleShow} = useContext(ToggleContext)
    return(
        toggleShow ? 
        <Body {...restProps}>{children}</Body> : null
    )
}
