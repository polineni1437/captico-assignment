import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import image from "../assets/login.png"
import { CiUser } from "react-icons/ci";
import { toast } from '@/hooks/use-toast';

const SERVER_URL = import.meta.env.VITE_API_URL;
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/api/user/login`, {
        email: email,
        password: password
      });
      console.log(response.data);
      if(response.status === 200) {
        toast({
          title: "Login Successful",
          variant: "success"
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[35%] flex flex-col px-10 items-center justify-center'>
        <div className='absolute top-3 left-3'>
          <h1 className='text-2xl text-black font-bold'><span className='text-teal-950'>V</span>Learn</h1>
        </div>
        <div className='bg-neutral-50 p-3 rounded-full shadow'>
          <CiUser size={25} className='text-black' />
        </div>
      <h2 className='text-2xl font-bold mt-5'>Login to your account</h2>
      <form onSubmit={handleLogin} className='flex flex-col items-center justify-center w-full mt-10 gap-5'>
        <input type="email" className='outline-teal-950 w-[75%] bg-transparent py-3 rounded-xl border border-neutral-200 px-5 text-xs' required placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className='outline-teal-950 w-[75%] bg-transparent py-3 rounded-xl border border-neutral-200 px-5 text-xs' required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='text-white py-3 bg-teal-950 rounded-xl w-[75%] text-xs'>Login</button>
      </form>
      <div className='flex items-center justify-center gap-2 mt-3'>
        <h3 className='text-xs'>Doesn't have an account?</h3>
        <Link to={'/register'}>
        <h4 className='text-xs text-teal-950'>Register</h4>
        </Link>
      </div>
      </div>

      <div className='w-[65%]'>
        <img src={image} alt="" className='w-full h-screen object-cover' />
      </div>
    </div>
  )
}

export default Login