import React from 'react'
import BgUser from '../../assets/img/bg-user.png';
import { Link } from 'react-router-dom';

const Restore = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center px-2 h-screen flex flex-col justify-center mt-2 items-center" 
        style={{
          backgroundImage: `url(${BgUser})`
        }}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full text-center'>
          <h2 className="text-3xl mt-3 font-bold text-[#407BFF]">Restore Data</h2>
          <p className='text-[#407BFF] mb-2'>Restore backed-up footage by continuing.</p>
          <div className='flex'>
            <div className="mb-2 mr-3 w-full">
              <Link to='/livestream' className='cursor-pointer'>
                <button type="button"
                  className="w-full border-[#407BFF] text-[#407BFF] border-2 hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Cancel
                </button>
              </Link>
            </div>
            <div className="mb-2 w-full">
              <Link to='/restoreCompleted' className='cursor-pointer'>
                <button type="button"
                  className="w-full bg-[#407BFF] text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Restore All Data
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Restore;