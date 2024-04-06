import React from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Facebook from '../../assets/img/facebook.png';
import X from '../../assets/img/X.png';
import Instagram from '../../assets/img/Instagram.png';
import Linkedin from '../../assets/img/linkedin.png';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const faqItems = [
    {
      question: "1. Q: How do I install my CCTV cameras?",
      answer: "To install your CCTV cameras, first, choose a location that provides optimal coverage of the area you want to monitor. Then, use the mounting brackets to securely install the cameras in the chosen locations."
    },
    {
      question: "2. Q: How do I connect my CCTV cameras to the DVR/NVR?",
      answer: "Connect each camera to the power source using the provided power adapter. Then, connect the cameras to the DVR/NVR using the included cables (usually BNC or Ethernet cables)."
    },
    {
      question: "3. Q: How do I configure my DVR/NVR settings?",
      answer: "To configure your DVR/NVR settings, connect the device to a monitor or TV using an HDMI or VGA cable. Power on the DVR/NVR and follow the on-screen instructions to set up the system. Configure basic settings such as language, date, and time."
    },
    {
      question: "4. Q: How do I set up remote access to my CCTV system?",
      answer: "To set up remote access, connect the DVR/NVR to your router using an Ethernet cable. Enable port forwarding on your router to allow remote access to the CCTV system. Use the provided credentials to access the system from a computer or mobile device connected to the internet."
    },
    {
      question: "5. Q: How do I troubleshoot issues with my CCTV system?",
      answer: "If you encounter issues with your CCTV system, try the following troubleshooting tips: Check power and connections for cameras and DVR/NVR. Ensure that the cables are securely connected. Restart the system by powering off and then on again. Check the network connection and settings for remote access. Update firmware for cameras and DVR/NVR if available."
    },
    {
      question: "6. Q: How do I view recorded footage from my CCTV system?",
      answer: "To view recorded footage, access the DVR/NVR's interface using a computer or mobile device connected to the same network. Navigate to the playback or recorded footage section and select the desired camera and time frame to view the footage."
    },
    {
      question: "7. Q: How do I back up CCTV footage?",
      answer: "To back up CCTV footage, connect a USB drive or external hard drive to the DVR/NVR. Navigate to the backup settings in the DVR/NVR's interface and select the footage you want to back up. Follow the on-screen instructions to complete the backup process."
    },
    {
      question: "8. Q: How do I reset my CCTV system to factory settings?",
      answer: "To reset your CCTV system to factory settings, locate the reset button on the DVR/NVR and press it for a few seconds. Alternatively, you can reset the system through the DVR/NVR's interface by accessing the system settings and selecting the reset option."
    }
  ];

  return (
    <>
      <div className='bg-[#407BFF] h-screen flex flex-col justify-center items-center'>
        <h1 className='mb-6 text-center text-white text-3xl font-bold'>How can we help you?</h1>
        <div className='w-full text-center'>
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="w-3/4 mb-4 rounded-lg border-white border-2 p-2.5 shadow-sm sm:text-sm"
          />
        </div>
        <div className='grid grid-col-1 lg:grid-col-4 gap-4 w-full lg:w-3/4 justify-center'>
          <strong className='italic text-white text-2xl'>Popular searches</strong>
          <button type="button"
            className="border-white text-white border-2 hover:text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Orders
          </button>
          <button type="button"
            className="border-white text-white border-2 hover:text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Installation
          </button>
          <button type="button"
            className="border-white text-white border-2 hover:text-white px-4 py-1 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Configuration
          </button>
        </div>
      </div>

      <div className='p-4 lg:py-10 lg:px-20'>
        <p className='text-lg text-[#407BFF] font-bold mb-3'>Popular Articles</p>
        <h2 className='text-[#1A40B1] text-xl font-bold'>FAQs</h2>
        <ul className="space-y-4">
          {faqItems.map((item, index) => (
            <li key={index} className="border-b">
              <h2 className="text-lg font-bold text-[#407BFF]">{item.question}</h2>
              <p className="text-[#407BFF] pl-2 lg:pl-3"><b>. A: </b> {item.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-blue-200 p-3 py-5 lg:px-14'>
        <h1 className='text-[#1A40B1] text-3xl font-bold'>Can't find what you're looking for?</h1>
        <p className='text-[#407BFF] text-md'>We're here to help. Contact us now</p>
        <div className='flex gap-2 mt-2'>
          <PhoneIcon className='text-[#407BFF] w-6'/>
          <p className='text-[#407BFF]'>+1 (222) 333 4444</p>
        </div>
        <div className='flex gap-2 mt-2'>
          <EnvelopeOpenIcon className='text-[#407BFF] w-6'/>
          <p className='text-[#407BFF]'>info@cloudlivestream.com</p>
        </div>
      </div>
      
      <div className='mt-3 lg:px-14 px-3'>
        <h1 className='text-[#407BFF] font-bold text-2xl'>Send a message request</h1>
        <div className='mt-3'>
          <input
            type="text"
            id="email"
            placeholder="Your email address"
            className="w-full lg:w-1/2 mb-4 rounded-lg border-[#407BFF] border-2 p-2.5 shadow-sm sm:text-sm"
          />
          <textarea type="text" id="installation" name="installation"
            className="w-full lg:w-1/2 p-2 block rounded-lg border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
            placeholder='Your message'
            rows="4"
          ></textarea>
          <div className='mt-4'>
            <button type="button"
              className="w-1/4 bg-[#407BFF] text-white p-2 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className='mt-3 bg-[#407BFF] text-white flex justify-between py-4 px-2 lg:px-10'>
        <div>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link to="/" className="text-white transition hover:font-bold"> Home </Link>
            </li>
            <li>
              <Link to="/plan" className="text-white transition hover:font-bold"> Plans & Pricing </Link>
            </li>
            <li>
              <Link to="/system" className="text-white transition hover:font-bold"> Security & Privacy </Link>
            </li>
            <li>
              <Link to="/support" className="text-white transition hover:font-bold"> About Us </Link>
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
          <img src={Facebook} alt='facebook' className='w-6 h-6'/>
          <img src={X} alt='X' className='w-6 h-6'/>
          <img src={Instagram} alt='instagram' className='w-6 h-6'/>
          <img src={Linkedin} alt='linkedin' className='w-6 h-6'/>
        </div>
      </div>
    </>
  )
}

export default SupportPage;
