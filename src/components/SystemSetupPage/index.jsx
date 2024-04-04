import React from 'react';
import { Link } from 'react-router-dom';
import BgUser from '../../assets/img/bg-user.png';

const SystemSetupPage = () => {
  const steps = [
    {
      title: "1. Unboxing and Placement:",
      details: [
        "Unbox your CCTV cameras and mounting brackets.",
        "Choose locations for your cameras that provide optimal coverage of the area you want to monitor.",
        "Use the mounting brackets to securely install the cameras in the chosen locations."
      ]
    },
    {
      title: "2. Camera Connection:",
      details: [
        "Connect each camera to the power source using the provided power adapter.",
        "Connect the cameras to the DVR (Digital Video Recorder) or NVR (Network Video Recorder) using the included cables (usually BNC or Ethernet cables)."
      ]
    },
    {
      title: "3. DVR/NVR Setup:",
      details: [
        "Connect the DVR/NVR to a monitor or TV using an HDMI or VGA cable.",
        "Power on the DVR/NVR and follow the on-screen instructions to set up the system.",
        "Configure the basic settings, such as language, date, and time."
      ]
    },
    {
      title: "4. Network Setup:",
      details: [
        "Connect the DVR/NVR to your router using an Ethernet cable for remote viewing and mobile access.",
        "Enable port forwarding on your router to allow remote access to the CCTV system."
      ]
    },
    {
      title: "5. Camera Configuration:",
      details: [
        "Access the DVR/NVR's interface using a computer or mobile device connected to the same network.",
        "Navigate to the camera settings and configure each camera's resolution, frame rate, and recording mode (continuous, motion detection, etc.).",
        "Set up email notifications or alerts for motion detection events if desired."
      ]
    },
    {
      title: "6. Mobile Access:",
      details: [
        "Download and install the mobile app for your CCTV system on your smartphone or tablet.",
        "Follow the app's instructions to connect to your CCTV system using the provided credentials.",
        "Access live camera feeds and recorded footage from your mobile device."
      ]
    },
    {
      title: "7. Testing and Fine-Tuning:",
      details: [
        "Test each camera to ensure they are capturing the desired area and adjust the angle if necessary.",
        "Test the remote access and mobile viewing to ensure they are working correctly.",
        "Fine-tune the camera settings, such as sensitivity for motion detection, to optimize performance."
      ]
    },
    {
      title: "8. Final Checks:",
      details: [
        "Secure all cables and ensure they are not exposed or at risk of being damaged.",
        "Test the system thoroughly to ensure all cameras are working and recording properly.",
        "Make any final adjustments to the camera placement or settings as needed."
      ]
    }
  ];
  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center px-2 h-screen flex flex-col items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold text-[#407BFF]">System Set-up</h2>
          <p className="text-md mb-4 text-[#98b0e4] leading-none">
            Here are general instructions for setting up a CCTV system, including connecting cameras and configuring settings. Note that specific instructions may vary depending on the CCTV system you are using:
          </p>
          <div className='mt-3'>
            {steps.map((step, index) => (
              <div key={index}>
                <h3 className="text-lg text-[#407BFF] font-semibold">{step.title}</h3>
                <ul className="list-disc text-[#98b0e4] leading-none pl-6 lg:pl-12">
                  {step.details.map((detail, i) => (
                    <li key={i} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex mt-4'>
              <div className="mb-2 mr-3 w-full">
                <Link to='/verifyNumber' className='cursor-pointer'>
                  <button type="button"
                    className="w-full border-[#407BFF] text-[#407BFF] border-2 text-lg hover:text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Back
                  </button>
                </Link>
              </div>
              <div className="mb-2 w-full">
                <Link to='/paymentDetails' className='cursor-pointer'>
                  <button type="button"
                    className="w-full bg-[#407BFF] text-lg text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SystemSetupPage