import React from 'react';
import * as ROUTES from '../constants/routes';

import { Header } from '../components';
import logo from '../logo.svg';

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='logo' src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            <Header.OptForm>
                {children}
            </Header.OptForm>
        </Header>
    )
};