import React from 'react';
import { useForm } from 'react-hook-form';
import { registration } from "../../servises/registration";
import {signInWithGoogle} from "../../servises/signInWithGoogle"
import TextFieldInput from '../../shared/textFieldInput/ui/TextFieldInput';
import { FcGoogle} from 'react-icons/fc';

const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (userData) => {
        try {
            await registration(userData);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form className='signUp__form' onSubmit={handleSubmit(onSubmit)}>
            <TextFieldInput type={'email'} label={'Email'} name={'email'} register={register}/>
            <TextFieldInput type={'text'} label={'Username'} name={'username'} register={register}/>
            <TextFieldInput type={'password'} label={'Password'} name={'password'} register={register}/>
            <TextFieldInput type={'password'} label={'Password confirm'} name={'passwordConfirm'} register={register}/>
            <button className='signUp__form-btn' type='submit'>
                Create account
            </button>
            <div className='signUp__form-additional'>
                <div className='signUp__form-additional-line'></div>
                <span>Or Sign up with</span>
                <div className='signUp__form-additional-line'></div>
            </div>
            <button 
            type='button'
            className='signUp__form-google'
            onClick={()=>{signInWithGoogle()}}
            >
                <FcGoogle />
            </button>
        </form>
    );
}

export default SignUpForm;
