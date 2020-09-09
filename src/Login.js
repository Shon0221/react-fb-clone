import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase.js';
import { actTypes } from './reducer';
import { useStateVal } from './StateProvider';

function Login() {
    // eslint-disable-next-line 
    const [state, dispatch] = useStateVal();

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
            .then((res) => {
                dispatch({
                    type: actTypes.SET_USER,
                    user: res.user
                });
            }).catch((err) => {

            });
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
