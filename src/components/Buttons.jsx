
import React from 'react';

function Button1({text}) {
  return (
   <button className='bg-[#7772F1] text-[white] py-[8px] px-[32px] rounded-[4px]' >{text}</button>
  );
}
function Button2({text}) {
  return (
   <button className='bg-[white] text-[#7772F1] py-[8px] px-[32px] rounded-[4px] border-2 border-[#7772F1] cursor-pointer' >{text}</button>
  );
}
function Button3({text}) {
  return (
   <button className=' text-[white] py-[8px] px-[32px] rounded-[4px] border-2 border-[#FFFFFF] cursor-pointer' >{text}</button>
  );
}

export {Button1,Button2,Button3};
