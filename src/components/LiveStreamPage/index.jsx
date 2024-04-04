import React, { useState } from "react";
import LogoTwo from '../../assets/img/Logo2.png';
import LiveStreamContent from "../LiveStreamContent";
import { Cog8ToothIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { 
  WrenchScrewdriverIcon, 
  VideoCameraIcon, 
  LightBulbIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function SidebarTabs() {
  const [activeSidebarTab, setActiveSidebarTab] = useState("Livestream");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarTabChange = (tab) => {
    setActiveSidebarTab(tab);
  };

  const sidebarTabs = [
    { no: 1, name: "Livestream", icon: <MicrophoneIcon className="w-6 h-6" /> },
    { no: 2, name: "Configure Analytics", icon: <WrenchScrewdriverIcon className="w-6 h-6" /> },
    { no: 3, name: "Insights", icon: <LightBulbIcon className="w-6 h-6" /> },
    { no: 4, name: "View Clips", icon: <VideoCameraIcon className="w-6 h-6" /> },
    { no: 5, name: "History", icon: <DocumentTextIcon className="w-6 h-6" /> },
    { no: 6, name: "Settings", icon: <Cog8ToothIcon className="w-6 h-6" /> },
  ];

  const sidebarTabContents = {
    Livestream: <LiveStreamContent />,
    "Configure Analytics": <p>This is the Configure Analytics tab content</p>,
    Insights: <p>This is the Insights tab content</p>,
    "View Clips": <p>This is the View Clips tab content</p>,
    History: <p>This is the History tab content</p>,
    Settings: <p>This is the Settings tab content</p>,
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`text-white lg:w-1/4 ${isSidebarOpen ? 'hidden' : 'block'} md:block`}>
        <div className="p-4 mt-4">
          <div className="flex flex-col items-center justify-center">
            <img src={LogoTwo} alt="LogoTwo" className = "w-[180px]"/>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className='mb-2 mt-5 w-1/3'>
              {sidebarTabs.map((tab) => (
                <div key={tab.no} className="text-center text-[#407BFF] mt-5">
                  <button type='button'  
                    onClick={() => handleSidebarTabChange(tab.name)}
                    className={`cursor-pointer flex items-center justify-center w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
                      activeSidebarTab === tab.name ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {tab.icon}
                  </button>
                  <span className='font-bold'>{tab.name}</span>
                </div>
              ))}
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

function LivestreamPage() {
  return (
    <div>
      <SidebarTabs />
    </div>
  );
}

export default LivestreamPage;