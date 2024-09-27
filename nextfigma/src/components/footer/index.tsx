import React from 'react';
import { CgChevronRight } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import "./style.css"


const index = () => {
    return (
        <footer className='backdrop-blur-md backdrop-sepia md:backdrop-filter-none'>
            <div className="glass flex justify-center gap-x-[157px] py-[50px] pl-[570px] ">
                <div className='w-[299px] h-[188px] p-4'>
                    <h1 className='text-white text-[35px] font-bold p-2'>Explore</h1>
                    <div className=" grid grid-cols-2 gap-3">
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />Home</span>
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />About us</span>
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />Contact us</span>
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />Home</span>
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />About us</span>
                        <span className='text-white text-[18px] font-normal flex items-center gap-x-2'><CgChevronRight />Contact us</span>
                    </div>

                </div>
                <div className=' w-[308px] h-[234px] p-2'>
                    <h1 className='text-white text-[35px] font-bold py-3'>Contact us</h1>
                    <div className='flex flex-col gap-3'>
                        <span className='flex text-white text-[18px] font-normal items-center gap-x-2 gap-y-4'><IoLocationOutline />3rd floor, Office 45</span>
                        <span className='flex text-white text-[18px] font-normal items-center gap-x-2 gap-y-4'><FiPhone />00965-9659786S</span>
                        <span className='flex text-white text-[18px] font-normal items-center gap-x-2 gap-y-4'><FaRegEnvelopeOpen />M.Alyaqout@4house.com</span>
                        <span className='flex text-white text-[18px] font-normal items-center gap-x-2 gap-y-4'><MdOutlineWatchLater />Sun - Sat / 10:00 AM - 8:00 PM</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;