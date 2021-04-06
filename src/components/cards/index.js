import React, { useState, useContext, createContext } from 'react'
{/* eslint-disable-next-line*/}
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image} from './styles/cards'


export const FeatureContent = createContext()


export default function Card ({children, ...restProps}){
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})
  return(
    <FeatureContent.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
      <Container {...restProps}>
        {children}
      </Container>
    </FeatureContent.Provider>
  )
}

Card.Group = ({children, ...restProps})=>{
  return(
    <Group {...restProps}>{children}</Group>
  )
}
Card.Title = ({children, ...restProps})=>{
  return(
    <Title {...restProps}>{children}</Title>
  )
}
Card.SubTitle = ({children, ...restProps})=>{
  return(
    <SubTitle {...restProps}>{children}</SubTitle>
  )
}
Card.Text = ({children, ...restProps})=>{
  return(
    <Text {...restProps}>{children}</Text>
  )
}
Card.Meta = ({children, ...restProps})=>{
  return(
    <Meta {...restProps}>{children}</Meta>
  )
}

Card.Entities = ({children, ...restProps})=>{
  return(
    <Entities {...restProps}>{children}</Entities>
  )
}
Card.Feature = ({category, children, ...restProps})=>{
  const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContent)
  return showFeature ? (
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={()=> setShowFeature(false)}>
          <img src='./images/icons/close.png' alt='close'/>
        </FeatureClose>
        <Group margin='30px 0px' flexDirection='row'  alignItems='center'>
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight='bold'>
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}

Card.Item = ({item, children, ...restProps})=>{
  const {setShowFeature, setItemFeature} = useContext(FeatureContent)
  return(
    <Item 
    onClick={()=>{
      setShowFeature(true)
      setItemFeature(item)
    }}
    {...restProps}>{children}</Item>
  )
}

Card.Image = ({ ...restProps}) =>{
  return(
    <Image {...restProps}/>
  )
}