import React from 'react';
import {OptForm, Features} from '../components';
import { FaqContainer } from '../container/faq';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import {JumbotronContainer} from '../container/jumbotron';


export default function Home(){
    return(
        <>
        <HeaderContainer>
            <Features>
                <Features.Title>Unlimited Tv Programms and More</Features.Title>
                <Features.SubTitle>Watch anywhere, Cancel anytime</Features.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder='Enter Email Address'/>
                    <OptForm.Button >Try it Now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </Features>
        </HeaderContainer>     
        <JumbotronContainer/>
        <FaqContainer/>
        <FooterContainer/>
        
        </>
    )
}