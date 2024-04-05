import React from 'react';
import { Link } from 'react-router-dom';
import BgUser from '../../assets/img/bg-user.png';

const UserCompleted = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:w-1/2 sm:w-full">
          <div 
            className="bg-cover bg-center h-screen px-4 pt-5 pb-4 p-4 lg:p-2 sm:pb-4"
            style={{
              backgroundImage: `url(${BgUser})`
            }}  
          >
            <div 
              className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2 text-center'
            >
              <h2 className="text-3xl mt-3 font-bold text-[#407BFF]">User Added</h2>
              <p className='text-[#407BFF] mb-2'>User successfully added</p>
              <div className="mb-2">
                <Link to='/livestream' className='cursor-pointer'>
                  <button type="button"
                    className="w-full bg-[#407BFF] text-lg p-1  text-white rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Go back home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCompleted;
