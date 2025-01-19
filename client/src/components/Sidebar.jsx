import React from 'react';
import { CiUser, CiCircleQuestion } from 'react-icons/ci';
import { IoBookOutline } from "react-icons/io5";


const Sidebar = () => {
  // List of quick links
  const links = [
    { id: 1, label: 'Profile', icon: <CiUser />,  },
    { id: 2, label: 'Help Center', icon: <CiCircleQuestion />,  },
  ];

  return (
    <div className="w-full h-full fixed top-0 left-0 px-5 py-5">
      <h1 className="text-2xl text-black font-bold mb-10">
        <span className="text-teal-950">V</span>Learn
      </h1>
      <div className='flex items-center justify-start gap-3 bg-neutral-50 p-2 rounded-lg cursor-pointer w-[14%]'>
        <IoBookOutline size={20} className='text-teal-900' />
        <h4 className='text-xs font-medium text-teal-900'>Courses</h4>
      </div>

      <div className='w-full absolute bottom-5 flex flex-col items-start justify-center gap-6'>
        {links.map((item, index) => (
            <div key={index} className='flex items-center justify-center gap-2 cursor-pointer p-2'>
                <span className='text-lg'>
                {item.icon}
                </span>
                <h4 className='text-xs'>{item.label}</h4>
            </div>
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
