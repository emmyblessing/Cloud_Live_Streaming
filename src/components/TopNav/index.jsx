import React from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='mt-2'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap'>
        <div className="mb-2 mr-3 w-full">
          <Link to='/support' className='cursor-pointer'>
            <button type="button"
              className="w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Support
            </button>
          </Link>
        </div>
        <div className="mb-2 mr-3 w-full">
          <Link to='/notification' className='cursor-pointer'>
            <button type="button"
              className="w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Notification
            </button>
          </Link>
        </div>
        <div className="mb-2 mr-3 w-full">
          <Link to='/account' className='cursor-pointer'>
            <button type="button"
              className="w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Account
            </button>
          </Link>
        </div>
        <div className="mb-2 mr-3 w-full">
          <Link to='/upgrade' className='cursor-pointer'>
            <button type="button"
              className="w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Upgrade
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav;
