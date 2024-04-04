import React from 'react'
import { Link } from 'react-router-dom';
import BgWelcome from '../../assets/img/bg-welcome.png';

const WelcomePage = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center h-screen flex flex-col justify-center text-center items-center" 
        style={{backgroundImage: `url(${BgWelcome})`}}
      >
        <div className='items-center text-center p-4'>
          <h1 className='text-5xl font-inter font-bold text-white'>Welcome to Your Secure CCTV Live <br /> Streaming Hub</h1>
          <p className='text-lg text-white'>Have you completed your Set-Up? <br /> anywhere.</p>
          <div className='mt-3 flex justify-center'>
            <Link
              className="rounded-md bg-[#407BFF] w-full px-10 py-1 text-lg font-medium text-white shadow mr-6"
              to="/userSpec"
              >
              Yes
            </Link> 
            <Link
              className="rounded-md border-white w-full border-2 px-10 py-1 text-lg font-medium text-white shadow"
              to="/signup"
              >
              No
            </Link> 
          </div>
          
        </div>
      </div>
    </>
  )
}

export default WelcomePage;
