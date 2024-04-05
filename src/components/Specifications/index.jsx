import React from 'react';
import BgUser from '../../assets/img/bg-user.png';
import { Link } from 'react-router-dom';
import { ChevronDownIcon} from '@heroicons/react/24/outline'

const Specifications = () => {
  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center px-2 h-screen flex flex-col items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-3/4'>
          <div className='flex justify-between'>
            <p className='text-[#1A40B1] text-xl font-bold py-2'>Account Details:</p>
            <Link to='/editInfo'>
              <button type="button"
                className="border-[#407BFF] text-[#407BFF] border text-sm hover:text-white py-1 px-3 rounded font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Edit info
              </button>
            </Link>
          </div>

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
            <p className='font-medium mt-2 text-lg text-[#407BFF]'>
              <strong>
                Address: &nbsp;
              </strong>
              43433, Freetown, Cape town, South Africa
            </p>
          </div>

          <p className='text-[#1A40B1] text-xl font-bold py-2'>Camera Specifications:</p>
          <div>
            <p className='font-medium text-lg text-[#407BFF]'>
              <strong>
                Number of Cameras: &nbsp;
              </strong>
              23
            </p>
            <p className='font-medium mt-2 text-lg text-[#407BFF]'>
              <strong>
                Camera Type: &nbsp;
              </strong>
              Bullet
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

          <div>
            <div className='flex justify-between'>
              <p className='text-[#1A40B1] text-xl font-bold'>Subscription Details:</p>
              <Link to='/planEdit' className='cursor-pointer border-[#407BFF] text-[#407BFF] border text-sm hover:text-white rounded font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600 px-1 py-0.5 flex'>
                Change Plan
                <ChevronDownIcon className='w-6 ml-2' />
              </Link>
            </div>
            
            <strong className='text-[#407BFF]'>
              Current
            </strong>
            <div className='border-2 border-[#407BFF] flex justify-between rounded-xl p-2'>
              <div className="mt-2 space-y-2">
                <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                  <div className="flex items-center">
                    &#8203;
                    <input type="checkbox" checked className="size-6 rounded-full border-gray-300" id="Option1" />
                  </div>
                  <div>
                    <span className="font-medium mr-2 text-[#407BFF]"> Yearly </span>
                    <i className='bg-blue-200 rounded-md font-bold px-1 py-0.5 text-xs text-[#407BFF]'>Premium</i>
                    <p className='text-[#407BFF] font-bold'>R413/Year</p>
                  </div>
                </label>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#407BFF]">R34</h2>
                <p className='text-[#407BFF]'>Per month</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between mt-4'>
            <p className='text-[#1A40B1] text-xl font-bold py-2'>Payment Information:</p>
            <Link to='/paymentEdit'>
              <button type="button"
                className="border-[#407BFF] text-[#407BFF] border text-sm hover:text-white py-1 px-3 rounded font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Change
              </button>
            </Link>
          </div>

          <div>
            <p className='font-medium mt-2 text-lg text-[#407BFF]'>
              <strong>
                Payment Method: &nbsp;
              </strong>
              Bank Card
            </p>
            <p className='font-medium mt-2 text-sm text-[#407BFF]'>
              Bank Card Details:
            </p>
            
          </div>
          <form>
            <div className="mb-1 flex w-full lg:w-3/4">
              <div className='mr-2 w-full'>
                <label className='text-[#407BFF] font-semibold italic'>Cardholder Name</label>
                <input type="text" id="country-code" name="country-code"
                  className="mt-1 p-1 block w-full border border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='Bong Richard'
                />
              </div>
              <div className='w-full'>
                <label className='text-[#407BFF] font-semibold italic'>Card Number</label>
                <input type="text" id="time" name="time"
                  className="mt-1 p-1 block w-full border border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='1234 4567 8909 8765'
                />
              </div>
            </div>
            <div className="mb-4 flex w-full lg:w-3/4">
              <div className='w-full mr-2'>
                <label className='text-[#407BFF] font-semibold italic'>Expiry Date</label>
                <input type="text" id="country-code" name="country-code"
                  className="mt-1 p-1 block w-full border border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='02/25'
                />
              </div>
              <div className='w-full'>
                <label className='text-[#407BFF] font-semibold italic'>CVV</label>
                <input type="text" id="time" name="time"
                  className="mt-1 p-1 block w-full border border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='576'
                />
              </div>
            </div>

            <div>
              <p className='font-medium mt-2 text-lg text-[#407BFF]'>
                <strong>
                  Payment Method: &nbsp;
                </strong>
                Paypal
              </p>
              <p className='font-medium italic text-sm text-[#407BFF]'>
                <strong>
                  Paypal Email ID: &nbsp;
                </strong>
                bong.rich@gmail.com
              </p>
            </div>

            <div className='mt-4'>
              <div className="mb-2 w-full">
                <Link to='/'>
                  <button type="button"
                    className="w-full border-[#407BFF] text-[#407BFF] border-2 hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Logout
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

export default Specifications;
