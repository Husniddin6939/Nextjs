import React from 'react';
import Image from 'next/image';
import Img1 from "../../images/image.jpg";
import Img2 from "../../images/Menu.png";
import Img3 from "../../images/See All.png";
import Img4 from "../../images/small pic.svg";
import Img5 from "../../images/hamburger.png";
import { PiChefHat } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const index = ()=> {
    return (
        <>
            <section>
                <div className="container flex items-center pb-[200px]" >

                    <div className="left mt-[95px] mx-[110px]">
                        <h1 className='flex flex-col font-bold text-[96px]'>Tasty Food <span className='text-[#90E051]'>Collections</span></h1>
                        <p className='font-medium text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ea porro facere quidem cum asperiores</p>
                        <div className='flex gap-x-4 pt-[64px]'>
                            <button className=' text-white font-medium text-[29px] shadow-lg bg-[#90E051] px-[72px] py-[21px] border rounded-[20px]'>See All</button>
                            <button className=' text-[#90E051] font-medium text-[29px] shadow-lg px-[72px] py-[21px] border rounded-[20px]' >Menu</button>
                        </div>
                    </div>

                    <div className='pt-[100px]'>
                        <Image
                            src={Img1}
                            alt="Description"
                            width={700}
                           
                        />

                    </div>
                </div>
            </section>

            <section>
                <div className='container mx-auto py-[40px] flex gap-x-4 justify-center text-center'>

                    <div className='flex flex-col  gap-y-4'>
                        <PiChefHat color='#90E051' size={70} />
                        <small className='font-semibold text-[15px]'>Professional Chefs</small>
                        <p className='font-medium text-[26px]'>420</p>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <IoFastFoodOutline color='#90E051' size={70} />
                        <small className='font-semibold text-[15px]'>Items of Food</small>
                        <p className='font-medium text-[26px]'>320</p>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <TbToolsKitchen3 color='#90E051' size={70} />
                        <small className='font-semibold text-[15px]'>Years of Experienced</small>
                        <p className='font-medium text-[26px]'>30+</p>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <LiaPizzaSliceSolid color='#90E051' size={70} />
                        <small className='font-semibold text-[15px]'>Happy Customers</small>
                        <p className='font-medium text-[26px]'>220</p>
                    </div>

                </div>
            </section>

            <section>
                <div className="container flex justify-between gap-x-4 pt-[65px] pb-[126px] pr-[150px] mx-auto">
                    <Image src={Img2} alt="Description" width={700} />
                    <Image src={Img3} alt="Description" width={700} />

                    
                </div>
            </section>

            <section>
                <div className="container flex gap-x-[150px] pl-[103px] pt-[108] pr-[70px] pb-[172px]">

                    <div className='pt-[181px] w-[670px]'>
                        <h1 className='font-bold text-[60px] mb-[38px]'>Customer Review</h1>
                        <p className='text-[#828282] font-normal text-[20px] mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                            Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                            consequat.
                        </p>

                        <div className='flex items-center justify-start gap-x-[284px]'>
                            <span className='flex items-center gap-x-5'>
                                <Image src={Img4} alt='Image'/>
                                <small>
                                    <h6 className='text-[#90E051] font-bold text-[22px]'>Abdur Rahman</h6>
                                    <p className='text-[#828282] font-normal text-[18px]'>Customer</p>
                                </small>
                            </span>
                            <span className='flex gap-x-[10px]'>
                                <IoArrowBack color='#828282' size={30} />
                                <IoArrowForward size={30} />
                            </span>
                        </div>

                    </div>

                <div className='pt-[60px]'>
                        <Image src={Img5} alt='image' width={600} />
                    </div>    

                </div>
            </section>

        </>

    );
};

export default index;