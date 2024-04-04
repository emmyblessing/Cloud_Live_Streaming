import React, { useState } from 'react';
import BgUser from '../../assets/img/bg-user.png';
import { Link } from 'react-router-dom';

const PlanPage = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div 
        className="bg-cover bg-center px-2 h-screen flex flex-col mt-5 items-center" 
        style={{
          backgroundImage: `url(${BgUser})`
        }}
      >
        <div className='bg-white lg:pl-8 lg:pr-8 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-5/6'>
          <div className="flex space-x-4">
            <button
              className={`${
                activeTab === 'monthly' ? 'bg-[#407BFF] text-white' : 'text-[#407BFF]'
              } px-4 py-2 rounded-lg`}
              onClick={() => handleTabChange('monthly')}
            >
              Billed Monthly
            </button>
            <button
              className={`${
                activeTab === 'yearly' ? 'bg-[#407BFF] text-white' : 'text-[#407BFF]'
              } px-4 py-2 rounded-lg`}
              onClick={() => handleTabChange('yearly')}
            >
              Billed Yearly
            </button>
          </div>
          <div className="mt-4">
            {activeTab === 'monthly' && (
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Basic</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R303</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Livestream </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Weapon Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Theft Prevention </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Playback </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Violence Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Fire Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Notifications </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Standard</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R378</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Everything on basic + </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Inventory Management </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> POS Integration </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Video Clips </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Fixing </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> People Counting </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Insights </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> File Sharing </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Premium</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R413</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Everything on standard + </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Access Control </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Customer Management </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Facial Recognition </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Time & Attendance </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Crowd Control </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Unlimited Downloads </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> BI Dashboard </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Up to 6 Account </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'yearly' && (
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Basic</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R263</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Livestream </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Weapon Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Theft Prevention </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Playback </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Violence Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Fire Detection </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Notifications </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Standard</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R329</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Everything on basic + </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Inventory Management </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> POS Integration </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Video Clips </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Fixing </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> People Counting </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Insights </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> File Sharing </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-[#1A40B1] p-4">
                  <h2 className="text-2xl font-bold text-[#1A40B1] text-center">Premium</h2>
                  <p className='text-center text-gray-500'>As low as</p>
                  <h2 className="text-xl font-bold text-[#1A40B1] text-center">R359</h2>
                  <p className='text-center text-gray-500'>Per camera/month</p>
                  <div className='text-center mt-2'>
                    <Link to='/payment' className='cursor-pointer text-center'>
                      <button type="submit"
                        className="w-1/2 text-[#407BFF] border-2 text-lg border-blue-600 p-1 rounded-lg font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className='text-center pl-2 lg:pl-16'>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Everything on standard + </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Access Control </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Customer Management </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Facial Recognition </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Time & Attendance </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Crowd Control </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Unlimited Downloads </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> BI Dashboard </strong>
                        </div>
                      </label>
                    </div>
                    <div className="mt-2 space-y-2">
                      <label htmlFor="Option1" className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                          &#8203;
                          <input type="checkbox" checked className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                          <strong className="font-medium text-[#1A40B1]"> Up to 6 Account </strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanPage;
