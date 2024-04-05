import React, { useState } from "react";
import { 
  BellIcon, 
  UserPlusIcon, 
  DocumentArrowUpIcon, 
  DocumentCheckIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Clips from "../Clips";
import DownloadPage from "../Download";
import RequestFootage from "../RequestFootage";
import Backup from "../Backup";
import Restore from "../Restore";

function SidebarTabs() {
  const [activeSidebarTab, setActiveSidebarTab] = useState("Clips");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarTabChange = (tab) => {
    setActiveSidebarTab(tab);
  };

  const sidebarTabs = [
    { no: 1, name: "Footage Request", icon: <BellIcon className="w-6 h-6" /> },
    { no: 2, name: "Clips", icon: <UserPlusIcon className="w-6 h-6" /> },
    { no: 3, name: "Download", icon: <DocumentArrowUpIcon className="w-6 h-6" /> },
    { no: 4, name: "Backup", icon: <DocumentCheckIcon className="w-6 h-6" /> },
    { no: 5, name: "Restore", icon: <UserIcon className="w-6 h-6" /> },
  ];

  const sidebarTabContents = {
    "Footage Request": <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <RequestFootage />
    </div>,
    Clips: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Clips />
    </div>,
    Download:<div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <DownloadPage />,
    </div>, 
    Backup: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Backup />
    </div>,
    Restore: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Restore />
    </div>
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`text-white relative lg:ml-[-70px] ml-[-1px] lg:w-1/4 ${isSidebarOpen ? 'hidden' : 'block'} md:block`}>
        <div className="p-4 mt-14">
          <div className="w-full">
            <div className='mb-2 mt-5'>
              {sidebarTabs.map((tab) => (
                <div key={tab.no} className="text-center flex items-center gap-1 text-[#1A40B1] mt-5">
                  <button type='button'  
                    onClick={() => handleSidebarTabChange(tab.name)}
                    className={`cursor-pointer ${
                      activeSidebarTab === tab.name ? "text-blue-900" : ""
                    }`}
                  >
                    {tab.icon}
                  </button>
                  <span 
                    onClick={() => handleSidebarTabChange(tab.name)}
                    className={`cursor-pointer block text-[#407BFF] ${
                      activeSidebarTab === tab.name ? "text-blue-900 font-bold" : "font-medium"
                    }`}> {tab.name} </span>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-gray-200 rounded-lg shadow-lg">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold mb-4 text-[#1A40B1]">Storage Status</h1>
                  <p className="text-[#407BFF] text-sm">50% Used</p>
                </div>
                
                <div className="w-full bg-gray-300 h-16 rounded-lg relative">
                  <div
                    className="absolute left-0 top-0 bg-green-500 h-full rounded-lg"
                    style={{ width: '70%' }}
                  ></div>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm font-bold mb-4 text-[#407BFF]">Available: <b>32GB</b></p>
                  <p className="text-[#407BFF] text-sm">Total: <b>64GB</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {!isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
        {sidebarTabContents[activeSidebarTab]}
      </div>
    </div>
  );
}

function Storage() {
  return (
    <div>
      <SidebarTabs />
    </div>
  );
}

export default Storage;