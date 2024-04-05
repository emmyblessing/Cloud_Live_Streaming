import React from 'react'
import { Link } from 'react-router-dom';
import BgUser from '../../assets/img/bg-user.png';

const RequestFootage = () => {
  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center lg:px-8 px-2 h-screen flex flex-col items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full'>
          <h2 className="text-3xl font-bold text-[#407BFF]">Footage Request</h2>
          <p className="text-md font-bold mb-4 text-[#407BFF]">Kindly enter your correct details.</p>
          <div>
            <p className='text-[#1A40B1] text-xl font-bold py-2'>Contact Information</p>
            <div>
              <p className='font-medium text-lg text-[#407BFF]'>
                <strong>
                  Name: &nbsp;
                </strong>
                Richard Bong
              </p>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Email Address: &nbsp;
                </strong>
                bong.rich@gmail.com
              </p>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Phone Number: &nbsp;
                </strong>
                +237123456789
              </p>
            </div>
          </div>
          
          <div>
            <p className='text-[#1A40B1] text-xl font-bold py-2 mt-3'>Footage Delivery Information</p>
            <div>
              <p className='font-medium text-lg text-[#407BFF]'>
                <strong>
                  Delivery Method:  &nbsp;
                </strong>                
                Storage
              </p>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Delivery Format: &nbsp;
                </strong>
                MP4
              </p>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Camera Resolution: &nbsp;
                </strong>
                8MP
              </p>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Camera Brand/Model: &nbsp;
                </strong>
                Samsung
              </p>
            </div>
          </div>
          <form>
            <p className='text-[#1A40B1] text-md font-bold py-2'>Time & Date</p>
            <div className='flex'>
              <div className="mr-1 w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Date</label>
                <input type="date" id="time" name="time"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='MM/YY'
                />
              </div>
              <div className="w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Time</label>
                <input type="text" id="time" name="time"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='12:32AM'
                />
              </div>
            </div>
            
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Camera Selection</label>
              <input type="text" id="postal" name="postal"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Select the camera(s) from which you need footage'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Purpose of Request</label>
              <textarea type="text" id="installation" name="installation"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Add note'
              ></textarea>
            </div>
            <div className='flex mt-4'>
              <div className="mb-2 mr-3 w-full">
                <Link to='/livestream' className='cursor-pointer'>
                  <button type="button"
                    className="w-full border-[#407BFF] text-[#407BFF] border-2 hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="mb-2 w-full">
                <Link to='/footageSuccess' className='cursor-pointer'>
                  <button type="button"
                    className="w-full bg-[#407BFF] text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Request
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RequestFootage;
