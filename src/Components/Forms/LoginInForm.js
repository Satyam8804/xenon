import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginInForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        toast.success('Logged In');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('An error occurred during sign-in');
    }
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <label>
        <p>Email Address <sup>*</sup></p>
        <input
          type="text"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label>
        <p>Password <sup>*</sup></p>
        <input
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginInForm;
