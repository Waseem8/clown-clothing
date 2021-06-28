import React, { Component } from 'react'
import CustomButton from '../costom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './SignIn.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.util'

export class SignIn extends Component {
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password: ''
        }
    }
    handelSubmite = async e =>{
        e.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        }catch(error){
            console.log(error);
        }
        
    }
    handelChange = e =>{
        const { value, name } = e.target
        this.setState({ [name] : value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmite}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handelChange={this.handelChange}
                        label="Email"
                        required
                    />
                    
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handelChange={this.handelChange}
                        label="Password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } googleSignIn={true}>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
