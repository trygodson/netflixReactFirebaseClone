import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { HeaderContainer } from '../container/header';
import {Form} from '../components';
import * as ROUTES from '../constants/routes'

export default function SignIn ({children, ...restProps}){
    const history = useHistory();
    const { firebase} = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const isInvalid = password === '' || email === '';
//   if(password === '' || email === ''){
//         (isInvalid = false)
//     }  else {
//         (isInvalid = true)
//     }
     
const handleSignIn = (e)=>{
    e.preventDefault()
    //firebase auth
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        //push to the browse page
        history.push(ROUTES.BROWSE)
    }
    ).catch((err)=>{
        setEmail('')
        setPassword('');
        setError(err.message);
    })
}
    return(
       <HeaderContainer {...restProps}>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn}>
                    <Form.Input
                        placeholder='Email Address'
                        value={email}
                        onChange={({target})=> setEmail(target.value)}
                    />
                    <Form.Input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={({target})=> setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type='submit'>Sign In</Form.Submit>
                    <Form.Text>New to Netflix <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now</Form.Link></Form.Text>
                    {/* eslint-disable-next-line*/}
                    <Form.TextSmall>This page is protected by Google reCAPTHCHA to ensure you are not a robot</Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
};