import React from 'react';
import Facebook from '../../assets/img/facebook.png';
import X from '../../assets/img/X.png';
import Instagram from '../../assets/img/Instagram.png';
import Linkedin from '../../assets/img/linkedin.png';
import { Link } from 'react-router-dom';

const PhoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const Email = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const Location = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)

const Footer = () => {
  return (
    <div>
      <div className='bg-[#09255D] md:p-5 p-2'>
        <div className='mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div class="p-3">
            <h1 className='lg:pt-6 pt-0 text-2xl text-white font-bold uppercase'> Contact </h1>
            <div className='mt-4'>
              <div className='mt-4 flex items-start gap-3'>
                { PhoneIcon }
                <div>
                  <p className='text-white text-lg'>
                    +1 (222) 333 4444
                  </p>
                </div>
              </div>
              <div className='mt-4 flex items-start gap-3'>
                { Email }
                <div>
                  <p className='text-white text-lg'>
                    info@cloudlivestream.com
                  </p>
                </div>
              </div>
              <div className='mt-4 flex items-start gap-3'>
                { Location }
                <div>
                  <p className='text-white text-lg'>
                    123 Union St,<br />
                    San Francisco CA 45678, <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3">
            <h1 className='lg:pt-6 pt-0 text-2xl text-white font-bold uppercase'> Company </h1>
            <div className='mt-4 text-white text-lg'>
              <div>
                <Link to="/">
                  Why Us
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Blog
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Customers
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Case Studies
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/about">
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div class="p-3">
            <h1 className='lg:pt-6 pt-0 text-2xl text-white font-bold uppercase'> Services </h1>
            <div className='mt-4 text-white text-lg'>
              <div>
                <Link to="/">
                  Plans & Pricing
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Live Streaming
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Multistreaming
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  IP Camera Streaming
                </Link>
              </div>
              <div className='mt-2'>
                <Link to="/">
                  Security & Privacy
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className='mt-3 flex gap-6 p-3'>
          <Link to="/">
            <img src={Facebook} alt="facebook" className='w-8' />
          </Link>
          <Link to="/">
            <img src={X} alt="X" className='w-8' />
          </Link>
          <Link to="/">
            <img src={Instagram} alt="Instagram" className='w-8' />
          </Link>
          <Link to="/">
            <img src={Linkedin} alt="Linkedin" className='w-8' />
          </Link>
        </div>    
      </div>
    </div>
  )
}

export default Footer;
