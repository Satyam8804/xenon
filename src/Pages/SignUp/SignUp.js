import React from 'react'
import Template from '../../Templates/Template'
const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Fill the Form And Join Our Family !"
   
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp