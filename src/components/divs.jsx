
import React from 'react';
import { Button1, Button2, Button3 } from './Buttons';

function Div1({ image,name,text }) {
  return (
   <div className='flex justify-between md:w-[80%] w-[90%] mx-auto items-center mt-[50px]'>
    <div>
    <h2 className='text-[32px] font-[900] text-[#1E212C]'>{name}</h2>
    <p className='text-[#787A80] text-[16px] font-[400] mt-[30px] mb-[60px]'>{text}</p>
    <div className='flex gap-8'>
        <Button2 text={"Learn more"}/>
        <Button1 text={"Try SEO toolkit"}/>
    </div>
    </div>
    <img src={image} alt=""  className='w-[712px] h-[404px] '/>
   </div>
  );
}
function Div2({ image,name,text }) {
  return (
   <div className='flex justify-between md:w-[80%] w-[90%] mx-auto items-center mt-[50px]'>
    <img src={image} alt=""  className='w-[712px] h-[404px] '/>
    <div>
    <h2 className='text-[32px] font-[900] text-[#1E212C]'>{name}</h2>
    <p className='text-[#787A80] text-[16px] font-[400] mt-[30px] mb-[60px]'>{text}</p>
    <div className='flex gap-8'>
        <Button2 text={"Learn more"}/>
        <Button1 text={"Try SEO toolkit"}/>
    </div>
    </div>
   </div>
  );
}

export {Div1,Div2};
