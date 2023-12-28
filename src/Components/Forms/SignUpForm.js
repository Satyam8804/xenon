import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './Form.css'
const SignUpForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [formData , setFormData] = useState({
        fName:"",
        lName:"",
        email:"",
        pass:"",
        cPass:""
    })
    const [showPassword , setShowPassword] = useState(false)

    function changeHandler(e){
        const {name , value} = e.target
        
        setFormData(  
            prevData=>{
                return{
                    ...prevData,
                    [name] :value
                }
            }
        )
        
    }
    async function handleSubmit(e) {
        e.preventDefault();
    
        if (formData.pass !== formData.cPass) {
          toast.error("Password doesn't match ");
          return;
        }
    
        try {
          const response = await fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            toast.success(data.message);
            setIsLoggedIn(true);
            navigate('/dashboard');
          } else {
            const errorData = await response.json();
            toast.error(errorData.error || 'Something went wrong');
          }
        } catch (error) {
          console.error('Error during signup:', error);
          toast.error('An error occurred during signup');
        }
      }
  return (

    <div className="signup">
        <form action="" onSubmit={handleSubmit}>
             <div className="name">
             <label>
                <p>First Name <sup>*</sup></p>
                <input 
                required
                placeholder='Enter First Name'
                type="text"
                name='fName'
                value={formData.fName}
                onChange={changeHandler}
                 />

             </label>
             <label>
                <p>Last Name <sup>*</sup></p>
                <input 
                required
                placeholder='Enter Last Name'
                type="text"
                name='lName'
                value={formData.lName}
                onChange={changeHandler}
                 />

             </label>
             </div>
             <label>
                <p>Email Id <sup>*</sup></p>
                <input 
                required
                placeholder='Enter Email Id'
                type="email"
                name='email'
                value={formData.email}
                onChange={changeHandler}
                 />

             </label>
            <div className="password">
            <label>
                <p>Password <sup>*</sup></p>
                <input 
                required
                placeholder='Enter Password'
                type={showPassword?("text"):("password")}
                name='pass'
                value={formData.pass}
                onChange={changeHandler}
                 />
                <span onClick={()=>{
                    setShowPassword((prev)=>!prev)
                    }}>
                    {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>
             </label>
             <label>
                <p>Confirm Password <sup>*</sup></p>
                <input 
                required
                placeholder='Confirm Password'
                type={showPassword?("text"):("password")}
                name='cPass'
                value={formData.cPass}
                onChange={changeHandler}
                 />
                <span onClick={()=>{
                setShowPassword((prev)=>!prev)
                }}>
                {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>
             </label>
                <button>Create Account</button>
            </div>
        </form>
    </div>

  )
}

export default SignUpForm