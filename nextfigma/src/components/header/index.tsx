import React from 'react';
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./style.css"

const index = () => {
    return (
        <header className='flex pl-[600px] fixed backdrop-blur-xl'>
            <div className=" flex items-center justify-center   gap-x-[450px] mx-auto p-4">
                <nav>
                    <ul className='flex gap-x-4 justify-center'>
                        <li><a className="font-medium text-[25px] {`link ${pathname === '/' ? 'active' : ''}`}" href="/">Home</a></li>
                        <li><a className="font-medium text-[25px] {`link ${pathname === '/menu' ? 'active' : ''}`}" href="/">Menu</a></li>
                        <li><a className="font-medium text-[25px] {`link ${pathname === '/about' ? 'active' : ''}`}" href="/">About</a></li>
                        <li><a className="font-medium text-[25px] {`link ${pathname === '/shop' ? 'active' : ''}`}" href="/">Shop</a></li>
                    </ul>
                </nav>
                <div className="icons flex gap-x-[19px]">
                <CiSearch size={22} />
                <AiOutlineUser size={22} />
                <LiaShoppingBagSolid size={22} />
                </div>
            </div>
        </header>
    );
};

export default index;