import React from 'react'
import Cam from '../../assets/img/cam.png';
import Google from '../../assets/img/google.png';
import Apple from '../../assets/img/Vector (3).png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div 
        className="bg-cover flex h-screen p-2 flex-col justify-center items-center" 
        style={{backgroundImage: `url(${Cam})`}}
      >
        <div className='bg-[#407BFF]/[.2] lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold mb-4 text-white">Log In Account</h2>
          <form>
            <div className="mb-4">
              <input type="email" id="email" name="email"
                className="mt-1 p-2 block w-full rounded-xl border focus:outline-none focus:border-blue-500"
                placeholder='Email Address'
              />
            </div>
            <div className="mb-4">
              <input type="password" id="email" name="email"
                className="mt-1 p-2 block w-full rounded-xl border focus:outline-none focus:border-blue-500"
                placeholder='Password'
              />
              <div className='text-end'>
                <Link to="/" className='text-white'>Forget password?</Link>
              </div>
            </div>
            <div className="mb-6">
              <Link to='/welcome' className='cursor-pointer'>
                <button type="button"
                  className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Login
                </button>
              </Link>
            </div>
            <div>
              <h1 className='text-2xl text-center text-white font-semibold'>OR</h1>
            </div>

            <div className="mb-4 mt-3">
              <button type="button"
                className="w-full flex justify-center text-[#09255D] bg-white p-3 rounded-2xl font-semibold hover:bg-[#407BFF] focus:outline-none focus:bg-[#407BFF]">
                <img className='w-5 mr-2' src={ Google } alt='Google'/>Continue with Google
              </button>
            </div>

            <div className="mb-4">
              <button type="button"
                className="w-full flex justify-center text-[#09255D] bg-white p-3 rounded-2xl font-semibold hover:bg-[#407BFF] focus:outline-none focus:bg-[#407BFF]">
                <img className='w-5 mr-2' src={ Apple } alt='Apple'/>Continue with Apple
              </button>
            </div>

            <div className="mb-2 text-center mt-10">
              <span className="text-white font-bold text-lg">Don't have an account? </span>
            </div>

            <div>
              <Link to='/signup' className='cursor-pointer'>
                <button type="submit"
                  className="w-full text-white border-2 text-lg border-blue-600 p-1 rounded-xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Create New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
