import React, { useState } from 'react';
import Cam from '../../assets/img/cam.png';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const CreatePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div 
        className="bg-cover flex h-screen flex-col justify-center items-center" 
        style={{backgroundImage: `url(${Cam})`}}
      >
        <div className='bg-[#407BFF]/[.2] lg:pl-12 lg:pr-12 p-8 rounded-2xl shadow-md w-1/2'>
          <h1 className="text-3xl font-bold mb-4 text-white">Create Password</h1>
          <form>
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
              <Link to='/login' className='cursor-pointer'>
                <button type="button"
                  className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Create Account
                </button>
              </Link>
          </form>
          <div>
            <p className='text-white text-lg font-semibold'>By clicking Sign Up, you agreeing to our <b>Terms and Conditions</b> and acknowledging our Policy applies.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePasswordPage;
