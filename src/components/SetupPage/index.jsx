import React from 'react'
import { Link } from 'react-router-dom';
import BgUser from '../../assets/img/bg-user.png';

const SetupPage = () => {
  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center px-2 h-screen flex flex-col justify-center items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold text-[#407BFF]">User Specification</h2>
          <p className="text-md font-bold mb-4 text-[#407BFF]">Kindly enter your correct details to continue the Set-Up</p>
          <form>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Full Name</label>
              <input type="text" id="f-name" name="f-name"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                value='Bongs Richard'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Country</label>
              <input type="country" id="country" name="country"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                value='South Africa'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>City</label>
              <input type="text" id="city" name="city"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                value='Cape town'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Address</label>
              <input type="text" id="f-name" name="f-name"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                value='1, Freetown'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Postal/ZIP Code</label>
              <input type="text" id="postal" name="postal"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                value='43433'
              />
            </div>
            <div className="mb-4 flex">
              <div className='w-22 mr-2'>
                <label className='text-[#407BFF] font-semibold'>Country Code</label>
                <input type="text" id="postal" name="postal"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  value='+237'
                />
              </div>
              <div className='w-full mr-2'>
                <label className='text-[#407BFF] font-semibold'>Phone number</label>
                <input type="text" id="postal" name="postal"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  value='1 234 456 667'
                />
              </div>
            </div>
            <div className="mb-2">
              <Link to='/verifyNumber' className='cursor-pointer'>
                <button type="button"
                  className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Continue
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SetupPage;
