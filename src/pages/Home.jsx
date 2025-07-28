import React from 'react'
import Pok from '../components/Pok'
import OurServices from '../components/OurServices'
import Seo from '../components/Seo'
import {Button1,Button2} from '../components/Buttons'
import {Card1,Card2, Cards} from '../components/Cards'
import BenefitsSection from '../components/BenefitsSection'
import { PriceBox1, PriceBox2, PriceBox3 } from '../components/Pricebox'
import TestimonialSlider from '../components/TestimonialSlider'
import LatestNews from '../components/LatestNews'

const Home = () => {
  return (
    <div>
    <div className='bg-[#232441] pt-[100px] pb-[60px]'>
      <div className='md:w-[80%] w-[90%] mx-auto flex justify-between'>
        <div className='w-[70%]'>
        <h1 className='text-[72px] font-[900] text-white'>Best <b className='text-[#7772F1]'>SEO & Marketing</b> Solutions for You</h1>
        <div className='flex  items-center'>
        <button className='px-[40px] text-white border-2 py-[8px] rounded-[4px]'>Get a free analysis</button>
        <img src="/Foto/hover.png" alt=""  className='ml-[20px] w-[84px] h-[84px] cursor-pointer'/>
        <b className='text-white text-[16px] font-[700] ml-[5px]'>Play video</b>
        </div>
        </div>
        <img src="/Foto/illustration.png" alt=""  className=' w-[35%] mt-[50px] h-[400px]'/>
      </div>
      <div className='text-white text-[20px] font-[700] flex md:w-[80%] w-[90%] mx-auto justify-between mt-[70px]'>
        <p className='border-r-2 border-[#DADBDD80] pr-[100px]'>SEO Content Strategy</p>
        <p className='border-r-2 border-[#DADBDD80] pr-[100px]'>Content Marketing</p>
        <p className=''>Website & Social Media Marketing</p>
      </div>
    </div>

    <div className='flex md:w-[80%] w-[90%] mx-auto py-[100px] justify-between'>
        <h3 className='text-[28px] font-[700] w-[55%]'>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</h3>
        <img src="/Foto/awards2.png" alt=""  className=' w-[495px] h-[182px]'/>
    </div>
        <img src="/Foto/Clients.png" alt=""  className=' w-[80%] h-[74px] mx-auto'/>
        <div className='flex md:w-[80%] w-[90%] mx-auto justify-between my-[100px]'>
          <div>
            <h2 className='text-[#1E212C] text-[46px] font-[900]'>Createx Agency </h2>
            <p className='text-[16px] text-[#787A80] font-[400] w-[68%] my-[40px]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
         <button className='bg-[#7772F1] px-[32px] py-[8px] rounded-[4px] text-white'>More about us</button>
          </div>
        <img src="/Foto/image1.png" alt=""  className=' w-[705px] h-[506px]'/>
        </div>
        <div className='md:w-[60%] mx-auto flex justify-between my-[100px]'>
          <Pok image={"/Foto/circle.png"} text={"Years of experience"}/>
          <Pok image={"/Foto/circle1.png"} text={"Awards"}/>
          <Pok image={"/Foto/circle2.png"} text={"Projects"}/>
          <Pok image={"/Foto/circle3.png"} text={"Happy clients"}/>
        </div>

       <OurServices/>
      <Seo/>

      <div className='md:w-[80%] w-[90%] mx-auto py-[100px] flex justify-between'>
        <div className=''>
          <h2 className='font-[900] text-[46px]'>Freequently Ask Questions</h2>
          <p className='items-center text-[#1E212C] text-[20px] font-[700]'><b className='text-[#7772F1] text-[30px] mr-[5px]'>-</b> Aliquet lectus urna viverra in odio?</p>
          <p className='text-[#787A80] text-[16px] font-[400] w-[47%]'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
          <p className='items-center text-[#1E212C] text-[20px] font-[700] my-[15px]'><b className='text-[#7772F1] text-[30px] mr-[5px]'>+</b>Orci commodo, viverra orci mollis ut euismod?</p>
          <p className='items-center text-[#1E212C] text-[20px] font-[700] my-[15px]'><b className='text-[#7772F1] text-[30px] mr-[5px]'>+</b>Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</p>
          <p className='items-center text-[#1E212C] text-[20px] font-[700] mb-[30px]'><b className='text-[#7772F1] text-[30px] mr-[5px]'>+</b>In id dolor quis nunc, urna hendrerit pharetra?</p>
        <Button1 text={"Discover more"}/>
        </div>
        <img src="/Foto/illustration4.png" alt=""  className=' w-[488px]  h-[404px]'/>
      </div>


      <div className='bg-[#F4F5F6] mt-[100px] py-[100px]'>
        <div className='md:w-[80%] w-[90%] mx-auto'>
          <h2 className='font-[900] text-[46px] mb-[50px]'>Read our clients' case studies</h2>
       <Cards/>
       <div className='flex justify-center gap-16 items-center my-[30px]'>
      <h4 className='text-[28px] font-[700]'>Explore more case studies</h4>
      <Button1 text={"View all case studies"}/>
      </div>
      </div>
      </div>

    <BenefitsSection/>

    <div>
          <h2 className='font-[900] text-[46px] mb-[20px] text-center'>Read our clients' case studies</h2>
        <img src="/Foto/left.png" alt=""  className=' w-[390px]  h-[46px] mx-auto'/>

    <div className='md:w-[80%] w-[90%] mx-auto mt-[30px] mb-[50px] flex justify-between'> 
    <PriceBox1/>
    <PriceBox2/>
    <PriceBox3/>
    </div>
    </div>
    <TestimonialSlider/>
    <LatestNews/>
    </div>
  )
}

export default Home
