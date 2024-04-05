import React, { useState } from "react";
import { 
  BellIcon, 
  UserPlusIcon, 
  DocumentArrowUpIcon, 
  DocumentCheckIcon,
  UserIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AddUser from "../AddUser";
import Notification from "../Notification";
import Specifications from "../Specifications";
import Storage from "../Storage";
import PlanPage from "../PlanPage";
import RequestFootage from "../RequestFootage";

function SidebarTabs() {
  const [activeSidebarTab, setActiveSidebarTab] = useState("Notification");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarTabChange = (tab) => {
    setActiveSidebarTab(tab);
  };

  const sidebarTabs = [
    { no: 1, name: "Notification", icon: <BellIcon className="w-6 h-6" /> },
    { no: 2, name: "Add User", icon: <UserPlusIcon className="w-6 h-6" /> },
    { no: 3, name: "Requested footage", icon: <DocumentArrowUpIcon className="w-6 h-6" /> },
    { no: 4, name: "Billing & Plans", icon: <DocumentCheckIcon className="w-6 h-6" /> },
    { no: 5, name: "Specifications", icon: <UserIcon className="w-6 h-6" /> },
    { no: 6, name: "Storage", icon: <CircleStackIcon className="w-6 h-6" /> },
    { no: 7, name: "Integration", icon: <CodeBracketSquareIcon className="w-6 h-6" /> },
    { no: 8, name: "More", icon: <EllipsisHorizontalCircleIcon className="w-6 h-6" /> },
  ];

  const sidebarTabContents = {
    Notification: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Notification />
    </div>,
    "Add User": <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <AddUser />
    </div>,
    "Requested footage": <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <RequestFootage />
    </div>,
    "Billing & Plans":<div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <PlanPage />
    </div>, 
    Specifications: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Specifications />
    </div>,
    Storage: <div className={`${isSidebarOpen} ? 'hidden' : 'block' `}>
      <Storage />
    </div>,
    Integration: <p>This is the Integration tab content</p>,
    More: <p>This is the More tab content</p>,
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

function Settings() {
  return (
    <div>
      <SidebarTabs />
    </div>
  );
}

export default Settings;