import React from 'react'
import Template from '../../Templates/Template'
const SignIn = ({setIsLoggedIn}) => {
  return (
    <div className='signin'>
      <Template
      title="Welcome Back"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default SignIn