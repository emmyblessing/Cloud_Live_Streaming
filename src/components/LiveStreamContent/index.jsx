import React from 'react'
import TopNav from '../TopNav';
import LiveOne from '../../assets/img/live1.png';
import LiveTwo from '../../assets/img/live2.png';
import { Link } from 'react-router-dom';

const LiveStreamContent = () => {
  return (
    <div className='mt-2'>
      <div>
        <TopNav />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 mt-6 gap-4 p-2 bg-gray-400 rounded-md'>
        <div className='col-span-2'>
          <Link to="/streamView">
            <img src={LiveOne} alt='Live'/>
          </Link>
        </div>
        <div>
          <div>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
          <div className='mt-4'>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
          <div className='mt-4'>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
          <div className='mt-4'>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
          <div className='mt-4'>
            <Link to="/streamView">
              <img src={LiveTwo} alt='Live'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStreamContent;
