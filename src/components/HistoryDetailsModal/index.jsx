import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const HistoryDetails = ({ isOpen, onClose }) => {
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
                      <h3 className="text-lg leading-none text-[#1A40B1] font-bold">Request Footage:</h3>
                      <i className='text-xs leading-none text-[#1A40B1]'>February 25, 2024, 10:00 AM</i>
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
              <div className="">
                <h3 className="text-lg text-[#1A40B1]">Request Details</h3>
                <ul className="text-lg text-[#1A40B1] list-disc lg:pl-7 pl-2">
                  <li>Request ID: 123456</li>
                  <li>Date and Time of Request: February 25, 2024, 10:00 AM</li>
                  <li>Requested By: John Doe</li>
                  <li>Contact Number: 555-123-4567</li>
                  <li>Email Address: johndoe@example.com</li>
                  <li>Purpose of Request: Access footage for February 24, 2024, between 12:00 PM and 3:00 PM for camera located at the main entrance.</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg text-[#1A40B1]">Footage Delivery Options</h3>
                <ul className="text-lg text-[#1A40B1] list-disc lg:pl-7 pl-2">
                  <li>Delivery Method: Storage</li>
                  <li>Delivery Format: MP4</li>
                  <li>Additional Notes: None</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg text-[#1A40B1]">Confirmation and Submission</h3>
                <ul className="text-lg text-[#1A40B1] list-disc lg:pl-7 pl-2">
                  <li>Review Request: Requesting access to footage for camera at the main entrance on February 24, 2024, between 12:00 PM and 3:00 PM, to be delivered via storage in MP4 format.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDetails;
