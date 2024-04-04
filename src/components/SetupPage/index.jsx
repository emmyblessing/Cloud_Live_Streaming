import React from 'react'
import { Link } from 'react-router-dom';
import BgUser from '../../assets/img/bg-user.png';

const SetupPage = () => {
  return (
    <>
      <div 
        className="bg-cover bg-tran bg-center px-2 h-screen flex flex-col items-center" 
        style={{backgroundImage: `url(${BgUser})`}}
      >
        <div className='bg-white lg:pl-12 lg:pr-12 p-5 rounded-2xl shadow-md mt-3 w-full lg:w-1/2'>
          <h2 className="text-3xl font-bold text-[#407BFF]">Set-Up Schedule</h2>
          <p className="text-md font-bold mb-4 text-[#407BFF]">Kindly enter your correct details to continue the Set-Up</p>
          <p className='text-[#1A40B1] text-md font-bold py-2'>Contact Information</p>
          <form>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Name</label>
              <input type="text" id="name" name="name"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Bongs Richard'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>E-mail</label>
              <input type="text" id="email" name="email"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='bong@gmail.com'
              />
            </div>
            <div className="mb-4 flex">
              <div className='w-22 mr-2'>
                <label className='text-[#407BFF] font-semibold'>Country Code</label>
                <input type="text" id="country-code" name="country-code"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='+237'
                />
              </div>
              <div className='w-full mr-2'>
                <label className='text-[#407BFF] font-semibold'>Phone number</label>
                <input type="text" id="time" name="time"
                  className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='1 234 456 667'
                />
              </div>
            </div>
            
            <p className='text-[#1A40B1] text-md font-bold py-2'>Time & Date</p>
            <div className='flex'>
              <div className="mr-1 w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Date</label>
                <input type="date" id="time" name="time"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='MM/YY'
                />
              </div>
              <div className="w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Time</label>
                <input type="text" id="time" name="time"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='12:32AM'
                />
              </div>
            </div>
            
            <p className='text-[#1A40B1] text-md font-bold py-2'>Camera Details</p>
            <div className='flex'>
              <div className="mr-1 w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Number of Cameras</label>
                <input type="text" id="cameras" name="cameras"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='23'
                />
              </div>
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Industry Type</label>
                <select
                  name="industry"
                  id="industry"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Club">Club</option>
                  <option value="Retail">Retail</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            
            <div className='flex'>
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Camera type</label>
                <select
                  name="cameratype"
                  id="cameratype"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Dome">Dome</option>
                  <option value="Club">Bullet</option>
                  <option value="ptz">PTZ (Pan-Tilt-Zoom)</option>
                  <option value="C-Mount">C-Mount</option>
                  <option value="Day/Night">Day/Night</option>
                  <option value="Thermal">Thermal</option>
                  <option value="Wireless">Wireless</option>
                  <option value="high">High Defin1ition (HD)</option>
                  <option value="degree">360-Degree</option>
                  <option value="network">Network/IP</option>
                </select>
              </div>
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Camera Environment</label>
                <select
                  name="environment"
                  id="environment"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="">Environment 1</option>
                  <option value="">Environment 2</option>
                  <option value="">Environment 3</option>
                  <option value="">Environment 4</option>
                </select>
              </div>
            </div>
            
            <div className='flex'>
              <div className="mr-1 w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Indoor</label>
                <input type="text" id="indoor" name="indoor"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='15'
                />
              </div>
              <div className="w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Outdoor</label>
                <input type="text" id="outdoor" name="outdoor"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='8'
                />
              </div>
            </div>

            <div className='flex'>
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Camera Resolution</label>
                <select
                  name="resolution"
                  id="resolution"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Restaurant">1MP</option>
                  <option value="Club">2MP</option>
                  <option value="Retail">3MP</option>
                  <option value="Others">4MP</option>
                  <option value="Others">5MP</option>
                  <option value="Others">6MP</option>
                  <option value="Others">7MP</option>
                  <option value="Others">8MP</option>
                </select>
              </div>
              <div className='w-full'>
                <label className='text-[#407BFF] text-sm font-semibold'>Camera Brand/Model</label>
                <select
                  name="brand"
                  id="brand"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Avigilon">Avigilon</option>
                  <option value="Honeywell">Honeywell</option>
                  <option value="AxisCommunication">AxisCommunication</option>
                  <option value="Panasonic">Panasonic</option>
                  <option value="Vivotek">Vivotek</option>
                  <option value="AlhuaTechnology">AlhuaTechnology</option>
                  <option value="HikVision">HikVision</option>
                  <option value="Bosch">Bosch</option>
                  <option value="CPPlus">CP Plus</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <p className='text-[#1A40B1] text-md font-bold py-2'>Installation Address</p>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Address line 1</label>
              <input type="text" id="address1" name="address1"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='1, Tomfound street'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Address line 2</label>
              <input type="text" id="address2" name="address2"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Tomfound Bus-station'
              />
            </div>

            <div className='flex'>
              <div className="mr-1 w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>City</label>
                <input type="text" id="city" name="city"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='Freetown'
                />
              </div>
              <div className="w-full">
                <label className='text-[#407BFF] text-sm font-semibold'>Zipcode</label>
                <input type="text" id="zipcode" name="zipcode"
                  className="mt-1 py-1.5 px-2 block w-full rounded border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                  placeholder='43443'
                />
              </div>
            </div>

            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>State/Province</label>
              <input type="text" id="state" name="state"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Freetown'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Country</label>
              <input type="text" id="country" name="country"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='South Africa'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Postal/ZIP Code</label>
              <input type="text" id="postal" name="postal"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='43433'
              />
            </div>
            <div className="mb-2">
              <label className='text-[#407BFF] font-semibold'>Installation Notes</label>
              <textarea type="text" id="installation" name="installation"
                className="mt-1 p-2 block w-full rounded-xl border-2 border-[#407BFF] focus:outline-none focus:border-blue-500"
                placeholder='Add note'
              ></textarea>
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
                <Link to='/system' className='cursor-pointer'>
                  <button type="button"
                    className="w-full bg-[#407BFF] text-lg text-white p-2 rounded-2xl font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SetupPage;
