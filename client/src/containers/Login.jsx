import React, { useEffect, useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock, FcGoogle } from '../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';
import { useNavigate } from 'react-router-dom';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../config/firebase.config';
import { validateUserJwtToken } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../context/actions/userActions';
import { alertInfo, alertWarning } from '../context/actions/alertAction';
import isEmailPatternValid from '../utils/isEmailPatternValid';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const alert = useSelector((state) => state.alert);

    useEffect(() => {
        if (user) {
            navigate('/', { replace: true });
        }
    }, [user]);

    const loginWithGoogle = async () => {
        await signInWithPopup(firebaseAuth, provider).then((userCred) => {
            firebaseAuth.onAuthStateChanged((cred) => {
                if (cred) {
                    cred.getIdToken().then((token) => {
                        validateUserJwtToken(token).then((data) => {
                            dispatch(setUserDetails(data));
                        });
                        navigate('/', { replace: true });
                    });
                }
            });
        });
    };

    const signUpWithEmailPass = async () => {
        if (userEmail === '' || password === '' || confirm_password === '') {
            dispatch(alertInfo('Required field should not be empty'));
        } else if (!isEmailPatternValid(userEmail)) {
            dispatch(alertInfo('Email is not valid'));
        } else if (password.length <= 6) {
            dispatch(
                alertInfo('password should be more than 6 characters long')
            );
        } else {
            if (password === confirm_password) {
                setUserEmail('');
                setPassword('');
                setConfirm_password('');
                await createUserWithEmailAndPassword(
                    firebaseAuth,
                    userEmail,
                    password
                )
                    .then((userCred) => {
                        firebaseAuth.onAuthStateChanged((cred) => {
                            if (cred) {
                                cred.getIdToken().then((token) => {
                                    validateUserJwtToken(token).then((data) => {
                                        dispatch(setUserDetails(data));
                                    });
                                    navigate('/', { replace: true });
                                });
                            }
                        });
                    })
                    .catch((err) => {
                        dispatch(
                            alertInfo(
                                err?.message ?? 'Could not process request'
                            )
                        );
                        console.log({});
                    });
            } else {
                dispatch(alertWarning("Password doesn't match"));
            }
        }
    };

    const signInWithEmailPass = async () => {
        console.log('first');
        if (userEmail === '' || password === '') {
            dispatch(alertInfo('Required field should not be empty'));
        } else if (!isEmailPatternValid(userEmail)) {
            dispatch(alertInfo('Email is not valid'));
        } else if (userEmail !== '' && password !== '') {
            await signInWithEmailAndPassword(firebaseAuth, userEmail, password)
                .then((userCred) => {
                    firebaseAuth.onAuthStateChanged((cred) => {
                        if (cred) {
                            cred.getIdToken().then((token) => {
                                validateUserJwtToken(token).then((data) => {
                                    dispatch(setUserDetails(data));
                                });
                                navigate('/', { replace: true });
                            });
                        }
                    });
                })
                .catch((err) => {
                    dispatch(alertInfo('Wrong Password'));
                    console.log({ err });
                });
        } else {
            dispatch(alertWarning("Password doesn't match"));
        }
    };
    return (
        <div className="w-screen h-screen relative overflow-hidden flex">
            <img
                src={LoginBg}
                className="w-full object-cover absolute top-0 left-0"
                alt=""
            />
            <div
                className="flex flex-col items-center bg-cardOverlay 
      w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6"
            >
                <div className="flex items-center justify-start gap-4 w-full">
                    <img src={Logo} className="w-8" alt="" />
                    <p className="text-headingColor font-semibold text-2xl">
                        City
                    </p>
                </div>
                <p className="text-headingColor font-semibold text-3xl">
                    Welcome Back
                </p>
                <p className="text-textColor text-xl  -mt-6">
                    {isSignUp ? 'Sign Up' : 'Sign In'} with following
                </p>

                <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
                    <LoginInput
                        placeHolder={'Enter Email'}
                        icon={<FaEnvelope className="text-xl text-textColor" />}
                        inputState={userEmail}
                        inputStateFunction={setUserEmail}
                        type="email"
                        isSignUp={isSignUp}
                    />
                    <LoginInput
                        placeHolder={'Enter Password'}
                        icon={<FaLock className="text-xl text-textColor" />}
                        inputState={password}
                        inputStateFunction={setPassword}
                        type="password"
                        isSignUp={isSignUp}
                    />

                    {isSignUp && (
                        <LoginInput
                            placeHolder={'Confirm Password'}
                            icon={<FaLock className="text-xl text-textColor" />}
                            inputState={confirm_password}
                            inputStateFunction={setConfirm_password}
                            type="password"
                            isSignUp={isSignUp}
                        />
                    )}
                    {!isSignUp ? (
                        <p>
                            Doesn't have an account ?{' '}
                            <motion.button
                                {...buttonClick}
                                className="text-red-400 underline cursor-pointer bg-transparent"
                                onClick={() => setIsSignUp(true)}
                            >
                                Create One
                            </motion.button>
                        </p>
                    ) : (
                        <p>
                            Already have an account ?{' '}
                            <motion.button
                                {...buttonClick}
                                className="text-red-400 underline cursor-pointer bg-transparent"
                                onClick={() => setIsSignUp(false)}
                            >
                                Sign-in
                            </motion.button>
                        </p>
                    )}
                    {isSignUp ? (
                        <motion.button
                            {...buttonClick}
                            className="w-full px-4 py-2 rounded-md bg-red-400 text-white text-xl hover:bg-red-500 capitalize transition-all duration-150"
                            onClick={signUpWithEmailPass}
                        >
                            Sign Up
                        </motion.button>
                    ) : (
                        <motion.button
                            {...buttonClick}
                            className="w-full px-4 py-2 rounded-md bg-red-400 text-white text-xl hover:bg-red-500 capitalize transition-all duration-150"
                            onClick={signInWithEmailPass}
                        >
                            Sign In
                        </motion.button>
                    )}
                </div>
                <div className="flex items-center justify-between gap-16">
                    <div className="w-24 h-[1px] rounded-md bg-white"></div>
                    <p className="text-white">or</p>
                    <div className="w-24 h-[1px] rounded-md bg-white"></div>
                </div>

                <motion.div
                    {...buttonClick}
                    className="flex items-center justify-center px-20 py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
                    onClick={loginWithGoogle}
                >
                    <FcGoogle className="text-3xl" />
                    <p className="capitalize text-base text-headingColor">
                        Sign in with Google
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;