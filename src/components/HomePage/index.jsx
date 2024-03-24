import React from 'react';
import { Link } from 'react-router-dom';
import RoundWebCam from '../../assets/img/RoundWebCam.png';
import LiveStream from '../../assets/img/Portrait of male security guard with uniform.png';
import CameraIntegration from '../../assets/img/Big brother colage concept.png';
import AccountManagment from '../../assets/img/Data information report statistics strategy concept.png';
import ViewRound from '../../assets/img/View of round modern webcam with shadows background.png';
import UserVector from '../../assets/img/Vector (1).png';
import VideoCam from '../../assets/img/videocam.png';
import StartLive from '../../assets/img/Vector (2).png';
import BusinessCorporate from '../../assets/img/BusinessCorporate.png';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center h-screen flex flex-col justify-center text-center items-center" 
        style={{backgroundImage: `url(${RoundWebCam})`}}
      >
        <div className='items-center p-4'>
          <h1 className='text-5xl font-inter font-bold text-white'>Secure CCTV Live Streaming for Your<br /> Peace of Mind</h1>
          <p className='text-lg text-white'>Effortlessly integrate your cameras and access live feeds anytime, <br /> anywhere.</p>
          <div className='mt-3'>
            <Link
              className="rounded-md bg-[#407BFF] px-10 py-1 text-lg font-medium text-white shadow"
              to="/register"
              >
              Register
            </Link> 
          </div>
          
        </div>
      </div>

      {/* Features Section */}
      <div className='mt-6 mb-3'>
        <h1 className='text-4xl text-[#1A40B1] text-center font-bold'>Key Features</h1>
        <div className='mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3 md:p-5 p-2'>
          <div className='p-2'>
            <img src={LiveStream} alt="Live Streaming"/>
            <h1 className='text-[#1A40B1] text-2xl font-bold'>Live Streaming</h1>
            <p className='text-[#407BFF] text-sm font-bold'>
              Watch live feeds from your CCTV cameras in real-time, ensuring you never miss a moment.
            </p>
          </div>
          
          <div className='p-2'>
            <img src={CameraIntegration} alt="Live Streaming"/>
            <h1 className='text-[#1A40B1] text-2xl font-bold'>Camera Integration</h1>
            <p className='text-[#407BFF] text-sm font-bold'>
              Easily connect your CCTV cameras to the platform for seamless live streaming.
            </p>
          </div>
          
          <div className='p-2'>
            <img src={AccountManagment} alt="Live Streaming"/>
            <h1 className='text-[#1A40B1] text-2xl font-bold'>Account Management</h1>
            <p className='text-[#407BFF] text-sm font-bold'>
              Manage your account settings, including password changes and profile updates, all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className='mt-4 bg-blue-100'>
        <h1 className='pt-6 text-4xl text-[#1A40B1] text-center font-bold'>How It Works</h1>
        <div className='mt-4 grid grid-cols-1 gap-2 lg:grid-cols-3 md:p-5 p-2'>
          <div className='p-2'>
            <img src={ViewRound} alt="View Round" className='w-[580px] h-[640px]' />
          </div>
          <div className='p-2 md:p-5 col-span-2'>
            <div className='flex items-start gap-3'>
              <img src={UserVector} alt="User Vector" className='w-[40px]' />
              <div>
                <h1 className='text-[#09255D] text-2xl font-bold'>Setting Up Your Account:</h1>
              </div>
            </div>
            <div className='mt-8'>
              <ol className="list-decimal list-inside text-xl font-bold text-[#407BFF]">
                <li>Click on the "Sign Up" button on the homepage.</li>
                <li>Fill in your details, including your name, email address, and password.</li>
                <li>Verify your email address to activate your account.</li>
              </ol>
            </div>
            
            <div className='mt-10 flex items-start gap-3'>
              <img src={VideoCam} alt="User Vector" className='w-[40px]' />
              <div>
                <h1 className='text-[#09255D] text-2xl font-bold'>
                  Integrating CCTV Cameras:
                </h1>
              </div>
            </div>
            <div className='mt-8'>
              <ol className="list-decimal list-inside text-xl font-bold text-[#407BFF]">
                <li>Log in to your account.</li>
                <li>Navigate to the camera integration section.</li>
                <li>Follow the on-screen instructions to add your CCTV cameras.</li>
                <li>Enter the required details, such as camera model and IP address, to connect your cameras to the platform.</li>
              </ol>
            </div>
            
            <div className='mt-10 flex items-start gap-3'>
              <img src={StartLive} alt="User Vector" className='w-[40px]' />
              <div>
                <h1 className='text-[#09255D] text-2xl font-bold'>Starting Live Streaming:</h1>
              </div>
            </div>
            <div className='mt-8'>
              <ol className="list-decimal list-inside text-xl font-bold text-[#407BFF]">
                <li>Once your cameras are integrated, go to the live streaming section.</li>
                <li>Select the camera feed you want to view.</li>
                <li>
                  Click on the "Start Live Stream" button to begin streaming the footage from your CCTV camera.
                </li>
              </ol>
            </div>
          </div>
        </div>        
      </div>

      {/* Security Measures Section */}
      <div 
        className="bg-cover bg-center bg-fixed lg:h-[560px] p-3 md:p-10" 
        style={{backgroundImage: `url(${BusinessCorporate})`}}
      >
        <h1 className='pt-6 text-4xl text-white font-bold'> Security Measures: </h1>
        <div className='mt-8'>
          <ol className="list-decimal list-inside text-2xl text-white">
            <li>
              <big className='font-bold'>End-to-End Encryption:</big> All data transmitted between the user's device and our servers is encrypted, ensuring that unauthorized parties cannot access the data.
            </li>
            <li>
              <big className='font-bold'>Secure Authentication:</big> Users are required to log in using a strong password and may be prompted to use two-factor authentication for added security.
            </li>
            <li>
              <big className='font-bold'>Data Protection:</big> We adhere to strict data protection laws and guidelines to ensure that user data is not misused or shared without consent.  
            </li>
            <li>
              <big className='font-bold'>Regular Security Audits:</big> We conduct regular security audits and updates to identify and mitigate any potential vulnerabilities.
            </li>
            <li>
              <big className='font-bold'>User Privacy:</big> We respect user privacy and do not share personal information with third parties without consent, except where required by law.
            </li>
          </ol>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

    </>
  )
}

export default HomePage;
