import React from 'react';
import {Header} from '../components'
import logo from '../logo.svg'
import * as ROUTES from '../constants/routes'
import { Profiles } from '../components';


export function SelectProfile ({user, setProfile}){
  return(
    <>  
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo}/>
        </Header.Frame>
        <Profiles>
          <Profiles.Title>Who's is Watching</Profiles.Title>
          <Profiles.List>
            <Profiles.User onClick={()=> setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL
            })} >
              <Profiles.Picture src={user.photoURL}/>
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>  
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  )

}