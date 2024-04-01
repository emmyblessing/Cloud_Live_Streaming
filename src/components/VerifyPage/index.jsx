import React from 'react';
import Cam from '../../assets/img/cam.png';
import { Link } from 'react-router-dom';

const VerifyPage = () => {
  return (
    <>
      <div 
        className="bg-cover flex h-screen p-2 flex-col text-center justify-center items-center" 
        style={{backgroundImage: `url(${Cam})`}}
      >
        <div className='bg-[#407BFF]/[.2] lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2'>
          <h1 className="text-3xl font-bold mb-4 text-white">Verify Email Address</h1>
          <h2 className="text-2xl font-semibold mb-4 text-white">To verify your email address, 
          we have sent an OTP to your email. Kindly enter the OTP </h2>

          <form>
            <div className="mb-6 mt-6 flex justify-between">
              <input type="text" name="pin1" id="pin1" maxlength="1" placeholder=""
                className="w-1/6 mr-8 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
              <input type="text" name="pin2" id="pin2" maxlength="1" placeholder=""
                className="w-1/6 mr-8 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
              <input type="text" name="pin3" id="pin3" maxlength="1" placeholder=""
                className="w-1/6 mr-8 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
              <input type="text" name="pin4" id="pin4" maxlength="1" placeholder=""
                className="w-1/6 mr-8 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
              <input type="text" name="pin5" id="pin5" maxlength="1" placeholder=""
                className="w-1/6 mr-8 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
              <input type="text" name="pin6" id="pin6" maxlength="1" placeholder=""
                className="w-1/6 px-4 py-3 border rounded-xl text-center focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <Link to='/createPassword' className='cursor-pointer'>
                <button type="button"
                  className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Verify
                </button>
              </Link>
            </div>
          </form>
          <div className="mb-2 text-center mt-10">
            <span className="text-white font-bold text-lg">Didn't recieve code? <Link className='text-xl' to='/verify'>Resend</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyPage;
