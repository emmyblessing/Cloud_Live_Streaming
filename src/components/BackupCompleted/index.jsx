import React from 'react'
import BgUser from '../../assets/img/bg-user.png';
import { Link } from 'react-router-dom';

const BackupCompleted = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center px-2 h-screen flex flex-col justify-center mt-2 items-center" 
        style={{
          backgroundImage: `url(${BgUser})`
        }}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2 text-center'>
          <h2 className="text-3xl mt-3 font-bold text-[#407BFF]">Back-Up Completed</h2>
          <p className='text-[#407BFF] mb-2'>Your data is successfully Saved and Secure.</p>
          <div className="mb-2">
            <Link to='/livestream' className='cursor-pointer'>
              <button type="button"
                className="w-full bg-[#407BFF] p-1  text-white rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Go back home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BackupCompleted;