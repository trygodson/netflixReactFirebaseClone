import React from 'react';
import {Spinner, LockBody, Picture, RealeaseBody} from './styles/loading';


export default function Loading({src, children, ...restProps}){
  return(
    <Spinner {...restProps}>
      <LockBody/>
      <Picture src={`/images/users/${src}.png`}/>
    </Spinner>
  )
}

Loading.RealeaseBody = ({children, ...restProps})=>{
  return(
    <RealeaseBody {...restProps}>{children}</RealeaseBody>
  )
}