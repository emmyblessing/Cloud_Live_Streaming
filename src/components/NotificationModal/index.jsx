import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const NotificationModal = ({ isOpen, onClose }) => {
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
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:w-1/2 sm:w-full">
          <div className="bg-blue-200 px-4 pt-5 pb-4 p-4 lg:p-2 sm:pb-4">
            <div className="mt-3 text-center sm:mt-0 ml-2  lg:ml-1 sm:text-left">
              <ul className="space-y-4">
                <div className='cursor-pointer'>
                  <li className="flex items-center gap-2">
                    <span onClick={onClose} className='size-6 text-[#1A40B1]'>
                      <ArrowLeftIcon />
                    </span>
                    <div>
                      <h3 className="text-lg leading-none text-[#1A40B1] font-bold">Unusual Activity Detected</h3>
                      <i className='text-xs leading-none text-[#1A40B1]'>March 2nd, 2024 12:45pm</i>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <div className='size-6 text-[#1A40B1]'>
                        <TrashIcon />
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
            <div className='mt-3 p-3'>
              <div className="text-[#407BFF]">
                <p>
                  Dear Bong,
                </p>

                <p className='mt-4'>
                  Our system has detected unusual activity near one of your cameras. The camera located at [Camera Location] detected activity at [Date and Time]. Please review the footage and ensure your property is secure.
                </p>

                <p className='mt-4'>
                  If you have any concerns, please contact our customer support team at [Customer Support Phone Number] or [Customer Support Email Address].
                </p>

                <p className='mt-4'>
                  Thank you for your attention to this matter.
                </p>

                <p className='mt-4'>
                  Best regards, ISPECO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
