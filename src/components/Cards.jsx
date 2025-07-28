
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Card1() {
  return (
    <div className='w-[390px] h-[390px] border-0 shadow bg-white p-[20px] rounded-[4px]'>
        <img src="/Foto/logo1.png" alt=""  className=' w-[80px]  h-[44px]'/>
        <p className='text-[14px] text-[#1E212C] font-[400]'>Charity organisation</p>
        <hr className='text-[#DADBDD80] my-[10px]'/>
        <p className='text-[18px] font-[400] text-[#787A80]'>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p> 
        <div className='mt-[125px] flex justify-between'>
          <div className='flex gap-[7px] items-center'>
        <img src="/Foto/doira1.png" alt=""  className=' w-[60px]  h-[60px]'/>
        <div>
        <h3 className='font-[700] text-[30px] text-[#1E212C]'>90%</h3>
        <p className='text-[15px] font-[400] text-[#1E212C]'>Engagement</p>
        </div>
          </div>
          <div className='flex gap-[7px] items-center'>
        <img src="/Foto/doira2.png" alt=""  className=' w-[60px]  h-[60px]'/>
        <div>
        <h3 className='font-[700] text-[30px] text-[#1E212C]'>100%</h3>
        <p className='text-[15px] font-[400] text-[#1E212C]'>Deliverability</p>
        </div>
          </div>
        </div>
        </div>
  );
}
function Card2() {
  return (
    <div className='w-[390px] h-[390px] border-0 shadow bg-white p-[20px] rounded-[4px] bg-[url("/Foto/card2.png")] bg-cover bg-center  text-white'>
        <img src="/Foto/logo1.png" alt=""  className=' w-[80px]  h-[44px]'/>
        <p className='text-[14px] text-[#1E212C] font-[400]'>Charity organisation</p>
        <hr className='text-[#DADBDD80] my-[10px]'/>
        <p className='text-[16px] font-[400] text-[#787A80] w-[90%]'>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p> 
        <div className='mt-[125px] flex justify-between'>
          <div className='flex gap-[7px] items-center'>
        <img src="/Foto/doira1.png" alt=""  className=' w-[60px]  h-[60px]'/>
        <div>
        <h3 className='font-[700] text-[30px] text-[#1E212C]'>90%</h3>
        <p className='text-[15px] font-[400] text-[#1E212C]'>Engagement</p>
        </div>
          </div>
          <div className='flex gap-[7px] items-center'>
        <img src="/Foto/doira2.png" alt=""  className=' w-[60px]  h-[60px]'/>
        <div>
        <h3 className='font-[700] text-[30px] text-[#1E212C]'>100%</h3>
        <p className='text-[15px] font-[400] text-[#1E212C]'>Deliverability</p>
        </div>
          </div>
        </div>
        </div>
  );
}
function Cards() {
  return (
    <div className='flex justify-between'>
      <Swiper
      spaceBetween={30}
      slidesPerView={2}
    >
         <SwiperSlide className='ml-[100px]'> <Card1/> </SwiperSlide>
      <SwiperSlide> <Card2/></SwiperSlide>
      <SwiperSlide><Card1/></SwiperSlide>
      <SwiperSlide><Card2/></SwiperSlide>
      
    </Swiper>
    </div>
  );
}

export {Card1,Card2,Cards};
