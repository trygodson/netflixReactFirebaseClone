import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { HeaderContainer } from '../container/header';
import {Form} from '../components';
import * as ROUTES from '../constants/routes'
import { FooterContainer } from '../container/footer';


export default function SignUp ({children, ...restProps}){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || password === '' || email === '';
    

    const signUpFunction = (e)=>{
        e.preventDefault();
        //some firebase stuff
        firebase.auth().createUserWithEmailAndPassword(email, password).then((res)=>{
            res.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(()=>{
                history.push(ROUTES.BROWSE)
            })
        }).catch((err)=>{
            setFirstName('')
            setEmail('')
            setPassword('')
            setError(err.message)
        })
    }

    return(
        <>
        <HeaderContainer {...restProps}>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={signUpFunction} method='POST'>
                    <Form.Input 
                    placeholder='firstName'
                    value={firstName}
                    onChange={({target})=> setFirstName(target.value) }
                    />
                    <Form.Input 
                    placeholder='Email Address'
                    value={email}
                    onChange={({target})=> setEmail(target.value) }
                    />
                    <Form.Input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={({target})=> setPassword(target.value) }
                    />
                    <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
                    <Form.Text>If already a user <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link></Form.Text>
                    {/* eslint-disable-next-line*/}
                    <Form.TextSmall>This page is protected by Google reCAPTHCHA to ensure you are not a robot</Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
};