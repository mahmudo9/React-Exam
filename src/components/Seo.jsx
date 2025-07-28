
import React from 'react';

function Seo() {
  return (
   <div className='bg-[#1E212C] py-[50px]'>
       <div className='md:w-[80%] w-[90%] mx-auto flex justify-between'>
        <img src="/Foto/illustration3.png" alt=""  className=' w-[397px] h-[396px]'/>
        <div>
          <h2 className='font-[900] text-[46px] text-[white]'>Get a Free SEO Analysis!</h2>
          <div className='text-[white] flex justify-between'>
            <div>
            <label htmlFor="name" className='font-[400] text-[16px] mb-[3px]'>Name</label><br />
            <input type="text" id='name' placeholder='Your name' className='border-2 border-[#FFFFFF1F] text-[white] rounded-[4px] px-[40px] py-[8px] bg-[#FFFFFF1F]' />
           </div>
           <div>
            <label htmlFor="email" className='font-[400] text-[16px] mb-[3px]'>Email</label><br />
            <input type="text" id='email' placeholder='Your working email' className='border-2 border-[#FFFFFF1F] text-[white] rounded-[4px] px-[40px] py-[8px] bg-[#FFFFFF1F]' />
         </div>
          </div><br />
          <label htmlFor="youtube" className='font-[400] text-[16px] mb-[3px] text-[white]'>Your website URL</label><br />
            <input type="text" id='youtube' placeholder='http://yoursite.com' className='w-[600px] border-2 border-[#FFFFFF1F] text-[white] rounded-[4px] px-[40px] py-[8px] bg-[#FFFFFF1F]' /><br />
       <div className='flex items-center mt-[30px]'>
       <div className='text-[white] flex gap-3 items-center '>
        <input type="checkbox" className=''/>
        <p className='w-[70%]'>I agree to receive communications from Createx SEO Agency</p>
        </div>
        <button className='text-[16px] font-[700] text-white py-[8px] px-[40px] bg-[#7772F1] rounded-[4px]'>Get a free analysis</button>
       </div>
        </div>
       </div>
       </div>
  );
}

export default Seo;
