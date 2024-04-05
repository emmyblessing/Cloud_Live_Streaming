import React from 'react';
import Play from '../../assets/img/play.png';
import Download from '../../assets/img/download.png';

const Clips = () => {
  return (
    <div>
      <div className="mt-4 space-y-6 p-6 rounded-2xl bg-blue-200">
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
          <div className='bg-white h-40 w-full p-2 rounded flex justify-between items-end'>
            <div>
              <img src={Play} alt='Play' className='w-4 h-4'/>
            </div>
            <div>
              <img src={Download} alt='Download' className='w-4 h-4'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clips;
