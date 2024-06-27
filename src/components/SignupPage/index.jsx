import React, { useState } from 'react';
import Cam from '../../assets/img/cam.png';
import Google from '../../assets/img/google.png';
import Apple from '../../assets/img/Vector (3).png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiEndpoint = 'https://api.ispecocloud.com'; 

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiEndpoint}/api/auth/send-email-otp/`, { email });
      
      if (response.status === 200) {
        navigate('/verify');
        toast.success('OTP sent to your email address!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(`OTP SENT`);
      } else {
        console.error(response.data.message);
        toast.error('Failed to generate OTP. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div 
        className="bg-cover p-2 flex h-screen flex-col justify-center items-center" 
        style={{backgroundImage: `url(${Cam})`}}
      >
        <div className='bg-[#407BFF]/[.2] lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold mb-4 text-white">Creating Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full rounded-xl border focus:outline-none focus:border-blue-500"
                placeholder='Email Address'
                required
              />
            </div>
            <div className="mb-6">
              {/* <Link to='/verify' className='cursor-pointer'> */}
                <button type="submit"
                  className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Continue
                </button>
              {/* </Link> */}
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
              <span className="text-white font-bold text-lg">Already have an account? </span>
            </div>

            <div>
              <Link to='/login' className='cursor-pointer'>
                <button type="submit"
                  className="w-full text-white border-2 text-lg border-blue-600 p-1 rounded-xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage;
