import React from "react";
import signUpBackgroundImg from "../../assets/img/7b6e580de3a2f7678ee62c8a03488098.png";
import {PiArrowBendDownLeftBold} from 'react-icons/pi';
import SignUpForm from "../../entities/signUpForm/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signUp__container">
                <div className="signUp__wrapper">
                    <div className="signUp__left-side">
                        <div className="signUp__top-block">
                            <div className="signUp__title">Sign up</div>
                            <Link to="/" className="signUp__return">
                                <PiArrowBendDownLeftBold/>
                            </Link>
                        </div>
                        <SignUpForm />
                    </div>
                    <div className="signUp__right-side">
                        <img src={signUpBackgroundImg} alt="signUp_Background_Img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
