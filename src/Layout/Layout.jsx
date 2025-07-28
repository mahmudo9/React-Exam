import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <div className='bg-[#232441]' id='top'>
        <div className=' md:w-[80%] mx-auto w-[90%] py-[20px]  flex items-center justify-between'>   
            <div className='flex gap-[40px] items-center'>
        <img src="/Foto/logo.png" alt=""  className='w-[130px] h-[22px]'/>
         <ul className='flex gap-[40px] text-[16px] font-[700] text-white'>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/services"}>Services</Link>
        </li>
        <li>
            <Link to={"/users"}>Users</Link>
        </li>
        <li>
            <Link to={"/search"}>Search Engine Optimization</Link>
        </li>
      </ul>
      </div>
      <button className='px-[40px] py-[8px] bg-[#7772F1] text-white rounded-[4px] text-[16px] font-[700]'>Talk to a human</button>
      </div>
      </div>

      <div>
        <Outlet/>
      </div>
      <div className='bg-[#1E212C] pt-[80px]'>
        <div className='md:w-[80%] w-[90%] mx-auto text-white flex justify-between '>
            <div className='md:w-[32%]'>
        <img src="/Foto/logo.png" alt=""  className='w-[130px] h-[22px]'/>
        <p className='my-[20px]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
        <img src="/Foto/socials.png" alt=""  className='w-[200px] h-[24px]'/>
            </div>
            <div className='md:w-[10%]'>
                <b>COMPANY</b>
                <p>About Us</p>
                <p>Case Studies</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Contacts</p>
            </div>
            <div className='md:w-[10%]'>
                <b>SERVICES</b>
                <p>Social Media</p>
                <p>SEO</p>
                <p>Research</p>
                <p>Content & PR</p>
                <p>Payed Traffic</p>
            </div>
            <div className='md:w-[13%]'>
                <b>CONTACT US</b>
                <p className='flex gap-0.5'><b className=''><PhoneIcon/></b>(405) 555-0128</p>
                <p className='flex gap-0.5'><b><EmailIcon/></b>hello@createx.com</p>
            </div>
            <div className='md:w-[29%]'>
            <b>SIGN UP TO OUR NEWSLETTER</b>
            <p className='border-[ 1px solid #FFFFFF33] bg-[#FFFFFF1F] rounded-[4px] w-[286px] h-[36px] text-right p-[5px] my-[20px]'>></p>
            <p className='text-[10px] '>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
            </div>
        </div>
        <div className='mt-[30px] border-t-2 border-[#DADBDD80] pt-[30px]'>
            <div className='flex md:w-[80%] w-[90%] mx-auto justify-between'>
        <img src="/Foto/awards.png" alt=""  className='w-[552px] h-[40px]'/>
            <div className='text-white flex gap-4'>
                <p>GO TO TOP</p>
                <a href="#top" className='bg-[#7772F1] text-[white]  rounded-[4px] w-[24px] h-[24px] text-center'>></a>
            </div>
            </div>
        </div>
        <div className=' bg-[#232441] py-[10px] mt-[30px]'>
            <p className='text-white w-[90%] md:w-[80%] mx-auto'>© All rights reserved.Made with 💜 by Createx Studio </p>
        </div>
      </div>
    </div>
  )
}

export default Layout
