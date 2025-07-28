import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MarketsSection from "../components/MarketsSection";
import { PriceBox1, PriceBox2, PriceBox3 } from "../components/Pricebox";
import { Cards } from "../components/Cards";
import OurServices from "../components/OurServices";

const Search = () => {
  return (
    <div>
      <div className="bg-[#232441] pt-[100px] pb-[60px] text-center mb-[50px]">
        <p className="text-white items-center font-[400] text-[14px]">
          <HomeIcon /> {">"} Services {">"} Search Engine Optimization
        </p>
        <h1 className="text-[72px] font-[900] text-white ">
          Search Engine Optimization
        </h1>
        <p className="text-[20px] font-[400] text-white w-[56%] mx-auto mb-[50px]">
          Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui
          pellentesque enim integer facilisi. Ultrices vitae tempor amet nec
          euismod non.{" "}
        </p>
        <label
          htmlFor="youtube"
          className="font-[400] text-[16px] mb-[3px] text-[white]"
        >
          Your website URL
        </label>
        <br />
        <input
          type="text"
          id="youtube"
          placeholder="http://yoursite.com"
          className="w-[600px] border-2 border-[#FFFFFF1F] text-[white] rounded-[4px] px-[40px] py-[8px] bg-[#FFFFFF1F]"
        />
        <br />
      </div>
      <img
        src="/Foto/Clients.png"
        alt=""
        className=" w-[80%] h-[74px] mx-auto"
      />
      <div className="flex  md:w-[80%] w-[90%] mx-auto  justify-between mt-[50px] items-center">
        <img src="/Foto/image2.png" alt="" className=" w-[705px] h-[560px]" />
        <div className="w-[33%]">
          <h2 className="text-[46px] font-[900] text-[#1E212C]">
            We go above and beyond to ensure successful SEO
          </h2>
          <p className="text-[#787A80] text-[16px] font-[400]">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
            viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
            diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
            ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
            pharetra, tristique libero. Dolor risus ac quam dictum mattis
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
            hendrerit. Cras at ac magna ultricies orci.
          </p>
        </div>
      </div>
      <MarketsSection />
      <MarketsSection />
      <div className="bg-[#7772F1] text-white md:w-[80%] w-[90%] mx-auto p-[30px] ">
        <h2 className="text-[32px] font-[900] mb-[20px] text-center">
          Get a Free SEO Analysis!
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="bg-[white] text-[#9A9CA5] p-[10px] w-[260px] border-0"
            />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Your working email"
              className="bg-[white] text-[#9A9CA5] p-[10px] w-[260px] border-0"
            />
          </div>
          <div>
            <label htmlFor="name">Your website URL</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="http://yoursite.com"
              className="bg-[white] text-[#9A9CA5] p-[10px] w-[260px] border-0"
            />
          </div>
          <button className="text-white py-[12px] px-[40px] bg-[#1E212C] rounded-[4px] mt-[30px]">
            Analyse your site
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-[900] text-[46px] mb-[20px] text-center mt-[50px]">
          Read our clients' case studies
        </h2>
        <img
          src="/Foto/left.png"
          alt=""
          className=" w-[390px]  h-[46px] mx-auto"
        />

        <div className="md:w-[80%] w-[90%] mx-auto mt-[30px] mb-[50px] flex justify-between">
          <PriceBox1 />
          <PriceBox2 />
          <PriceBox3 />
        </div>
      </div>
      <Cards />
      <br />
      <br />
      <OurServices />
    </div>
  );
};

export default Search;
