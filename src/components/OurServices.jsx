
import React from 'react';

function OurServices() {
  return (
   <div className='md:w-[80%] w-[90%] mx-auto pb-[100px]'>
        <h2 className='text-[46px] font-[900] text-center'>Our services</h2>
        <div className='flex justify-between mt-[50px] mb-[30px]'>
          <p className='border-2 border-[#7772F1] text-[#7772F1] rounded-[4px] text-[16px] font-[700] py-[4px] px-[40px]'>Social Media</p>
          <p className='text-[#9A9CA5] text-[16px] font-[700]'>SEO</p>
          <p className='text-[#9A9CA5] text-[16px] font-[700]'>Research</p>
          <p className='text-[#9A9CA5] text-[16px] font-[700]'>Content & PR</p>
          <p className='text-[#9A9CA5] text-[16px] font-[700]'>Payed Traffic</p>
        </div>
        <div className='flex justify-between '>
        <div className='w-[34%]'>
          <h3 className='text-[#1E212C] text-[28px] font-[700]'>Complete Worflow For Any SEO Professional</h3>
            <p className='text-[#424551] text-[16px] font-[400] my-[15px]'>☑️Aenean enim tellus morbi nisl vulputate dictumst.</p>
            <p className='text-[#424551] text-[16px] font-[400] my-[15px]'>☑️Nibh sapien volutpat lacus augue.</p>
            <p className='text-[#424551] text-[16px] font-[400]'>☑️Vel in amet, placerat adipiscing est pharetra.</p>
            <p className='text-[#424551] text-[16px] font-[400] my-[15px]'>☑️Gravida ornare sit in et ut sit sem id.</p>
            <p className='text-[#424551] text-[16px] font-[400] my-[15px]'>☑️Ultrices pellentesque dictum enim egestas ac diam.</p>
            <p className='text-[#424551] text-[16px] font-[400]'>☑️Sit semper enim senectus integer ut turpis et. </p>
            <div className='mt-[30px] flex gap-8'>
              <button className='py-[8px] px-[32px] border-2 text-[#7772F1] border-[#7772F1] rounded-[4px] '>Learn More</button>
              <button className='py-[8px] px-[32px] border-2 text-[white] bg-[#7772F1] rounded-[4px] '>Try SEO toolkit</button>
            </div>
        </div>
        <img src="/Foto/illustration2.png" alt=""  className=' w-[712px] h-[404px] mx-auto'/>
        
        </div>
        </div>
  );
}

export default OurServices;
