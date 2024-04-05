import React, { useState } from 'react';
import BgUser from '../../assets/img/bg-user.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
/* import UserCompleted from '../UserCompletedModal'; */
import { Link } from 'react-router-dom';

const AddUser = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  /* const [isOpen, setIsOpen] = useState(false); */

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  /* const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }; */

  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center px-2 h-screen flex flex-col items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-3/4'>
          <h2 className="text-3xl font-bold text-[#407BFF]">Add User</h2>
          <p className="text-md font-bold mb-4 text-[#407BFF]">Kindly enter correct details of the user. The user must have an account with us.</p>
          <p className='text-[#1A40B1] text-md font-bold py-2'>User Details</p>
          <form>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Full Name</label>
              <input type="text" id="name" name="name"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Shattar Mike'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>E-mail Address</label>
              <input type="text" id="email" name="email"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='jjc@gmail.com'
              />
            </div>
            <div className="mb-4 flex">
              <div className='w-22 mr-2'>
                <label className='text-[#407BFF] font-semibold'>Country Code</label>
                <input type="text" id="country-code" name="country-code"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='+237'
                />
              </div>
              <div className='w-full mr-2'>
                <label className='text-[#407BFF] font-semibold'>Phone number</label>
                <input type="text" id="time" name="time"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='1 234 456 667'
                />
              </div>
            </div>

            <div className="mb-2">
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>User role</label>
                <select
                  name="industry"
                  id="industry"
                  className="mt-1 py-1.5 px-2 block text-sm w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Restaurant">Admin</option>
                  <option value="Club">Viewer</option>
                  <option value="Retail">Other</option>
                </select>
              </div>
            </div>
            
            <p className='text-[#1A40B1] text-md font-bold py-2'>Access Permissions</p>
            <div className="mb-2">
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Camera Access</label>
                <select
                  name="industry"
                  id="industry"
                  className="mt-1 py-1.5 px-2 text-sm block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Restaurant">Outdoor</option>
                  <option value="Club">Indoor</option>
                  <option value="Retail">Both</option>
                </select>
              </div>
            </div>
            
            <div className="mb-2">
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Notification Access</label>
                <select
                  name="industry"
                  id="industry"
                  className="mt-1 py-1.5 text-sm px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Restaurant">Yes</option>
                  <option value="Club">No</option>
                </select>
              </div>
            </div>

            <p className='text-[#1A40B1] text-md font-bold py-2'>Login Credentials</p>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>E-mail Address</label>
              <input type="text" id="email" name="email"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='jjc@gmail.com'
              />
            </div>

            <label className='text-[#407BFF] font-semibold'>Create Password</label>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl py-3 px-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-600"
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </span>
            </div>
            
            <label className='text-[#407BFF] font-semibold'>Confirm Password</label>
            <div className="mb-8 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Confirm password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl py-3 px-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-600"
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </span>
            </div>

            <div className='mt-4'>
              <div className="mb-2 w-full">
                <Link to='/userCompleted'>
                  <button type="button"
                    /* onClick={openModal} */
                    className="w-full bg-[#407BFF] text-lg text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <UserCompleted isOpen={isOpen} onClose={closeModal} /> */}
    </>
  )
}

export default AddUser;
