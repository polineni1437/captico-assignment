import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const userLoggedIn = () => {
       const name = localStorage.getItem('name');
       setUser(name);
    }
    const handleLogOut = () => {
      localStorage.clear();
      navigate('/login');
    }

    useEffect(() => {
        userLoggedIn();
    }, []);
  return (
    <div className="w-[85%] h-14 fixed top-0 bg-white shadow-sm flex items-center justify-between px-20">
      {user ? <h1 className="text-xl text-black font-semibold">
        Welcome Back, {user}👋
      </h1>: <h1 className="text-xl text-black font-semibold">
        Welcome Back,👋
      </h1>}
      {user ? <div onClick={handleLogOut} className="bg-white px-4 py-2 rounded-xl border flex items-center justify-center">
        <button className="text-xs">Logout</button>
      </div> : <Link to={'/login'}><div className="bg-white px-4 py-2 rounded-xl border flex items-center justify-center">
        <button className="text-xs">Login</button>
      </div></Link>}
    </div>
  );
};

export default Header;
