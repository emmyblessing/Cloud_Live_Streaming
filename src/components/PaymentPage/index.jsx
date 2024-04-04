import React, { useState } from 'react';
import BgUser from '../../assets/img/bg-user.png';
import Wallet from '../../assets/img/wallet.png';
import Paypal from '../../assets/img/paypal.png';
import { Link } from 'react-router-dom';
import { ChevronDownIcon} from '@heroicons/react/24/outline'

const PaymentPage = () => {
  const [activePaymentTab, setActivePaymentTab] = useState('bank');

  const handleTabChange = (tab) => {
    setActivePaymentTab(tab);
  };

  return (
    <>
      <div 
        className="bg-cover bg-center px-2 h-screen flex flex-col mt-5 items-center" 
        style={{
          backgroundImage: `url(${BgUser})`
        }}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold text-[#407BFF]">Payment Reservation</h2>
          <p className='text-[#407BFF]'>You will not be charged until the set-up is complete</p>
          <div className='flex justify-between'>
            <p className='text-[#1A40B1] font-bold'>Choosed Plan</p>
            <Link to='/plan' className='cursor-pointer flex text-[#407BFF]'>
              Change Plan
              <ChevronDownIcon className='w-6 ml-2' />
            </Link>
          </div>
          <div className='border-2 mt-3 border-[#407BFF] flex justify-between rounded-xl p-3'>
            <div className="mt-2 space-y-2">
              <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                <div className="flex items-center">
                  &#8203;
                  <input type="checkbox" checked className="size-6 rounded-full border-gray-300" id="Option1" />
                </div>
                <div>
                  <span className="font-medium mr-2 text-[#407BFF]"> Yearly </span>
                  <i className='bg-blue-200 rounded-md font-bold px-1 py-0.5 text-xs text-[#407BFF]'>Premium</i>
                  <p className='text-[#407BFF] font-bold'>R359/Camera</p>
                </div>
              </label>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#407BFF]">R359</h2>
              <p className='text-[#407BFF]'>Per month</p>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-[#1A40B1] font-bold'>Payment Information</p>
            <div className="flex space-x-4 mt-2">
              <button
                className={`${
                  activePaymentTab === 'bank' ? 'text-[#407BFF] border-[#407BFF]' : 'text-blue-300'
                } px-2 flex py-3 text-left w-full rounded-lg border-2 font-semibold`}
                onClick={() => handleTabChange('bank')}
              >
                <img src={Wallet} alt='Wallet' className='w-8'/>
                <p className='ml-3'>Bank Card</p>
              </button>
              <button
                className={`${
                  activePaymentTab === 'paypal' ? 'text-[#407BFF] border-[#407BFF]' : 'text-blue-300'
                } px-2 py-3 flex text-left w-full rounded-lg border-2 font-semibold`}
                onClick={() => handleTabChange('paypal')}
              >
                <img src={Paypal} alt='Paypal' className='w-8'/>
                <p className='ml-3'>Paypal</p>
              </button>
            </div>
          </div>
          <div className='mt-2'>
            {activePaymentTab === 'bank' && (
              <form>
                <div className="">
                  <label className='text-[#407BFF] text-sm font-semibold'>Cardholder Name</label>
                  <input type="text" id="c-name" name="c-name"
                    className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                    placeholder='Bong Richard'
                  />
                </div>
                <div className="">
                  <label className='text-[#407BFF] text-sm font-semibold'>Card Number</label>
                  <input type="text" id="c-number" name="c-number"
                    className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                    placeholder='XXXX XXXX XXXX XXXX'
                  />
                </div>
                <div className='flex'>
                  <div className="mr-1 w-full">
                    <label className='text-[#407BFF] text-sm font-semibold'>Expiry Date</label>
                    <input type="date" id="date" name="date"
                      className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                      placeholder='MM/YY'
                    />
                  </div>
                  <div className="w-full">
                    <label className='text-[#407BFF] text-sm font-semibold'>CVV</label>
                    <input type="text" id="cvv" name="cvv"
                      className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                      placeholder='XXX'
                    />
                  </div>
                </div>
                <div className='flex'>
                  <div className="mr-1 w-full">
                    <label className='text-[#407BFF] text-sm font-semibold'>City</label>
                    <input type="text" id="city" name="city"
                      className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                      placeholder='MM/YY'
                    />
                  </div>
                  <div className="w-full">
                    <label className='text-[#407BFF] text-sm font-semibold'>Zipcode</label>
                    <input type="text" id="zipcode" name="zipcode"
                      className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                      placeholder='XXX'
                    />
                  </div>
                </div>
                <div className="">
                  <label className='text-[#407BFF] text-sm font-semibold'>Country</label>
                  <input type="text" id="c-name" name="c-name"
                    className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                    placeholder='South Africa'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className="mb-2 mr-3 w-full">
                    <Link to='/verifyNumber' className='cursor-pointer'>
                      <button type="button"
                        className="w-full border-[#407BFF] text-[#407BFF] border-2 text-xl hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Back
                      </button>
                    </Link>
                  </div>
                  <div className="mb-2 w-full">
                    <Link to='/setup' className='cursor-pointer'>
                      <button type="button"
                        className="w-full bg-[#407BFF] text-xl text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
                
              </form>
            )}
          </div>
          {activePaymentTab === 'paypal' && (
            <div>
              Paypal
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PaymentPage;
