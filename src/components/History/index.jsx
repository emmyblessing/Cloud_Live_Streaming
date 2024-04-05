import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import Notification from '../../assets/img/notification.png';
import HistoryDetails from '../HistoryDetailsModal';

const History = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className='px-4 lg:px-20'>
        <div className="relative">
          <input type="text" id="c-name" name="c-name"
            className="mt-1 py-1.5 px-2 block w-full rounded-md border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
            placeholder='Search by date'
          />
          <span
            type="button"
            className="absolute inset-y-0 end-0 grid place-content-center px-4 text-[#407BFF]"
          >
            <CalendarIcon className='h-5 w-5'/>
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-6 p-6 bg-blue-300">
        <ul className="space-y-4">
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Notification}
                alt="Notification"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Request Footage</h3>
                <i className='text-sm text-[#407BFF]'>February 25, 2024, 10:00 AM</i>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='text-[#407BFF]'>
                  <b>Status: </b> Pending <br />
                  <b>Request ID: </b> 123456
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='mt-3 cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Notification}
                alt="Notification"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Request Footage</h3>
                <i className='text-sm text-[#407BFF]'>February 25, 2024, 10:00 AM</i>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='text-[#407BFF]'>
                  <b>Status: </b> Completed <br />
                  <b>Request ID: </b> 123456
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='mt-3 cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Notification}
                alt="Notification"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Request Footage</h3>
                <i className='text-sm text-[#407BFF]'>February 25, 2024, 10:00 AM</i>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='text-[#407BFF]'>
                  <b>Status: </b> Completed <br />
                  <b>Request ID: </b> 123456
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='mt-3 cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Notification}
                alt="Notification"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Request Footage</h3>
                <i className='text-sm text-[#407BFF]'>February 25, 2024, 10:00 AM</i>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='text-[#407BFF]'>
                  <b>Status: </b> Completed <br />
                  <b>Request ID: </b> 123456
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='mt-3 cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Notification}
                alt="Notification"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Request Footage</h3>
                <i className='text-sm text-[#407BFF]'>February 25, 2024, 10:00 AM</i>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <div className='text-[#407BFF]'>
                  <b>Status: </b> Completed <br />
                  <b>Request ID: </b> 123456
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <HistoryDetails isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default History