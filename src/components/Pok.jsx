
import React from 'react';

function Pok({ image,text }) {
  return (
   <div className='text-center'>
   <img src={image} alt="" className='w-[148px] h-[148px] mx-auto'/>
   <p className='text-[#424551] text-[14px] font-[400] mt-[15px]'>{text}</p>
   </div>
  );
}

export default Pok;
