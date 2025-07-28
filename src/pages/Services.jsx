import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button2, Button3 } from '../components/Buttons';
import { Div1, Div2 } from '../components/divs';
import Seo from '../components/Seo';
import MarketsSection from '../components/MarketsSection';
import { PriceBox1, PriceBox2, PriceBox3 } from '../components/Pricebox';
import LatestNews from '../components/LatestNews';
const Services = () => {
  return (
    <div>
      <div className='bg-[#232441] pt-[100px] pb-[60px] text-center mb-[50px]'>
        <p className='text-white items-center font-[400] text-[14px]'><HomeIcon/>  > Services</p>
        <h1 className='text-[72px] font-[900] text-white '>Our services</h1>
        <p className='text-[20px] font-[400] text-white w-[56%] mx-auto mb-[50px]'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
        <Button3 text={"Start now"}/>
        </div>
        <Div1 image={"/Foto/illustration6.png"} name={"Social Media Marketing"} text={"Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "}/>
        <Div2 image={"/Foto/illustration6.png"} name={"Social Media Marketing"} text={"Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "}/>
        <Div1 image={"/Foto/illustration6.png"} name={"Social Media Marketing"} text={"Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "}/>
        <Div2 image={"/Foto/illustration6.png"} name={"Social Media Marketing"} text={"Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "}/>
        <Div1 image={"/Foto/illustration6.png"} name={"Social Media Marketing"} text={"Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "}/>
   
   <Seo/>
   <MarketsSection/>
   <div>
          <h2 className='font-[900] text-[46px] mb-[20px] text-center'>Read our clients' case studies</h2>
        <img src="/Foto/left.png" alt=""  className=' w-[390px]  h-[46px] mx-auto'/>

    <div className='md:w-[80%] w-[90%] mx-auto mt-[30px] mb-[50px] flex justify-between'> 
    <PriceBox1/>
    <PriceBox2/>
    <PriceBox3/>
    </div>
    </div>
        <img src="/Foto/Clients.png" alt=""  className=' w-[80%] h-[74px] mx-auto'/>
    <LatestNews/>
    </div>

  )
}

export default Services
