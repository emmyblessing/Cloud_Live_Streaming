import React, { useState } from 'react';
import MessageNo from '../../assets/img/messageno.png';
import Message from '../../assets/img/message.png';
import Bell from '../../assets/img/bell.png';
import BellFade from '../../assets/img/bellFade.png';
import NotificationModal from '../NotificationModal';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className='px-4'>
        <div className="flex justify-between">
          <h3 className="text-2xl text-[#1A40B1] font-bold">Notification</h3>
          <div className='flex'>
            <img
              src={MessageNo}
              alt="MessageNo"
              className="w-10 mr-4"
            />
            <img
              src={Message}
              alt="Message"
              className="w-10 mr-4"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-6 p-6 rounded-2xl bg-blue-200">
        <ul className="space-y-4">
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Bell}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">System Upgrade</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We are pleased to inform you that a system upgrade is available for your............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>45 minutes ago </i>
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Bell}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">System Upgrade</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We are pleased to inform you that a system upgrade is available for your............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>45 minutes ago </i>
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Bell}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">System Error</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We regret to inform you that an error has occurred in your CCTV system............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'> 1 hours ago </i>
                </div>
              </div>
            </li>
          </div>

          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={Bell}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-[#1A40B1] font-bold">Storage Space Running Low</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, Your CCTV system's storage space is running low. Please consider incre............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>1 hours ago </i>
                </div>
              </div>
            </li>
          </div>

          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={BellFade}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-blue-400 font-bold">Unusual Activity Detected</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, Our system has detected unusual activity near one of your cameras. The...........</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>2 hours ago </i>
                </div>
              </div>
            </li>
          </div>

          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={BellFade}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-blue-400 font-bold">System Maintenance</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We are pleased to inform you that a system upgrade is available for your............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>2 hours ago </i>
                </div>
              </div>
            </li>
          </div>

          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={BellFade}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-blue-400 font-bold">Camera Offline</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We regret to inform you that one of the cameras in your CCTV system is............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>2 hours ago </i>
                </div>
              </div>
            </li>
          </div>
          
          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={BellFade}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-blue-400 font-bold">Firmware Update</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, We are pleased to inform you that a system upgrade is available for your............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>2 hours ago </i>
                </div>
              </div>
            </li>
          </div>
          <hr className='border-gray-700'/>
          <div className='cursor-pointer' onClick={openModal}>
            <li className="flex items-center gap-4">
              <img
                src={BellFade}
                alt="Notification"
                className="size-12 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-blue-400 font-bold">Welcome Message</h3>
                <i className='text-sm text-[#407BFF]'>Dear Bong, Welcome to our CCTV system! We are thrilled to have you as a customer............</i>
              </div>

              <div className="flex items-center justify-end text-xs">
                <div className='text-[#407BFF]'>
                  <i className='font-bold'>2 hours ago</i>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <NotificationModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default Notification;
