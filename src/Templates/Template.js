import React from 'react'
import './Template.css'
import SignUpForm from '../Components/Forms/SignUpForm'
import LoginInForm from '../Components/Forms/LoginInForm'

const Template = ({title,formtype,setIsLoggedIn}) => {
  return (
    <div className='template'>
        <div className="title">
            <h1>{title}</h1>
            {formtype === "signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginInForm  setIsLoggedIn={setIsLoggedIn}/>)}
            <div className="">
                <div className=""></div>
                <div className="">OR</div>
                <div className=""></div>
            </div>

            <button>Sign Up With Google</button>
        </div>
    </div>
  )
}

export default Template