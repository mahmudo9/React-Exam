
import React from 'react';
import { Button2 } from './Buttons';
import { motion } from 'framer-motion';
      import AOS from 'aos';
import 'aos/dist/aos.css';
      function PriceBox1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.4 }}
       data-aos="fade-up"
      data-aos-delay="0"
      className='w-[390px] h-[536px] border-2 border-[#7772F166] rounded-[4px] shadow-2xl p-[15px] text-center'
    >
      <h4 className='text-[28px] font-[700] text-[#1E212C]'>Basic</h4>
      <h2 className='text-[#7772F1] font-[900] text-[46px]'>$24 <b className='text-[20px] font-[700]'>/mon</b></h2>
      <hr className='text-[#DADBDD80] my-[15px]' />
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Advanced Analytics</p>
      <p className='text-[16px] font-[400] text-[#1E212C] my-[15px]'>☑️  Change Management</p>
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Corporate Finance</p>
      <p className='text-[16px] font-[400] text-[#1E212C] my-[15px]'>☑️  One Way Link Building</p>
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Social Media Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Strategy & Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Information Technology</p>
      <Button2 text={'Choose plan'} />
    </motion.div>
  );
}

function PriceBox2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.5, delay: 0.15 }}
       data-aos="fade-up"
      data-aos-delay="150"
      className='w-[390px] h-[536px] border-2 border-[#03CEA4] text-[white] rounded-[4px] shadow-2xl p-[15px] text-center bg-[#1E212C]'
    >
      <h4 className='text-[28px] font-[700] text-[white]'>Optimal</h4>
      <h2 className='text-[#03CEA4] font-[900] text-[46px]'>$64 <b className='text-[20px] font-[700]'>/mon</b></h2>
      <hr className='text-[#DADBDD80] my-[15px]' />
      <p className='text-[16px] font-[400]'>✅  Advanced Analytics</p>
      <p className='text-[16px] font-[400] my-[15px]'>✅  Change Management</p>
      <p className='text-[16px] font-[400]'>✅  Corporate Finance</p>
      <p className='text-[16px] font-[400] my-[15px]'>✅  One Way Link Building</p>
      <p className='text-[16px] font-[400]'>✅  Social Media Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Strategy & Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Information Technology</p>
      <Button2 text={'Choose plan'} />
    </motion.div>
  );
}

function PriceBox3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.4, delay: 0.3 }}
      data-aos="fade-up"
      data-aos-delay="300"
      className='w-[390px] h-[536px] border-2 border-[#7772F166] rounded-[4px] shadow-2xl p-[15px] text-center'
    >
      <h4 className='text-[28px] font-[700] text-[#1E212C]'>Premium</h4>
      <h2 className='text-[#7772F1] font-[900] text-[46px]'>$98 <b className='text-[20px] font-[700]'>/mon</b></h2>
      <hr className='text-[#DADBDD80] my-[15px]' />
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Advanced Analytics</p>
      <p className='text-[16px] font-[400] text-[#1E212C] my-[15px]'>☑️  Change Management</p>
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Corporate Finance</p>
      <p className='text-[16px] font-[400] text-[#1E212C] my-[15px]'>☑️  One Way Link Building</p>
      <p className='text-[16px] font-[400] text-[#1E212C]'>☑️  Social Media Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Strategy & Marketing</p>
      <p className='text-[16px] font-[400] text-[#9A9CA5] my-[15px]'>❌  Information Technology</p>
      <Button2 text={'Choose plan'} />
    </motion.div>
  );
}      
      export {PriceBox1,PriceBox2,PriceBox3};
      