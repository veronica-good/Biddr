import React from 'react';
import {User} from '../requests.js'


const SignUpPage=(props)=>{
    const {handleSignUp, history}=props;
    function handleSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData=new FormData(currentTarget);
        const signUpParams={
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(signUpParams).then(res=>{
            if (res.id){
                console.log(res.id)
                handleSignUp();
                history.push('/questions')
            }
        })

    }
    return(
        <main>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">First Name</label>
                <input type='text' name='name' id='name'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password'/>
            </div>
            <div>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input type='password' name='password_confirmation' id='password_confirmation'/>
            </div>
            <input type='submit' value='Sign Up'/>
        </form>
        </main>
    )
}
export default SignUpPage;