import React from 'react';
import Stream from '../../assets/img/stream.png';
import Backward from '../../assets/img/backward.png';
import Play from '../../assets/img/play.png';
import Forward from '../../assets/img/forward.png';

const StreamViewPage = () => {
  return (
    <div className='p-4'>
      <div>
        <img src={Stream} alt='Stream'/>
      </div>
      <div className='mt-3 flex gap-12 text-center items-center justify-center'>
        <div>
          <img src={Backward} alt='Backward' className='w-16'/>
        </div>
        <div>
          <img src={Play} alt='Forward' className='w-10'/>
        </div>
        <div>
          <img src={Forward} alt='Forward' className='w-16'/>
        </div>
      </div>
    </div>
  )
}

export default StreamViewPage;
