import React, { useEffect } from 'react'
import Header from '../components/Header'
import MyCourses from '../components/MyCourses'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate('/login');
    }
  },[token])
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[20%] h-full'>
      <Sidebar />
      </div>
      <div className='w-full h-full border-l'>
        <Header />
        <div className='w-full h-screen bg-neutral-50 mt-14 p-10'>
          <MyCourses />
        </div>
      </div>
    </div>
  )
}

export default Home