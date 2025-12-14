import React from 'react'
import logo from '../assets/Images/logo.png'
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import profile from '../assets/Images/profile.jpeg'

const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        },
    ]
  return (
    <div className='flex justify-between items-center'>
    <div className='flex items-center gap-8 md:gap-12 px-4 md:px-8 py-3'>
        <img src={logo} className='w-20 md:w-28.75 object-cover' /> 
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=> (
            <HeaderItem name = {item.name} Icon = {item.icon}/>
        ))}  
        </div> 
        <div className='flex md:hidden gap-8'>
        {menu.map((item, i)=> i<3&& (
            <HeaderItem name = {""} Icon = {item.icon}/>
        ))}  
        </div>
         <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
         <HeaderItem name = {" "} Icon = {HiDotsVertical}/>
         {toggle ? <div className='absolute mt-5 bg-black rounded-md p-3 shadow-lg shadow-white/20 px-5 py-4'>
            {menu.map((item, i)=> i>=3&& (
                <HeaderItem
                key={i}
                name={item.name}
                Icon={item.icon}
                showName={true}
              />
            ))}
                </div> :  null }
        </div> 
        </div>
        <img src={profile} alt="" 
        className='m-10 w-10 h-10 rounded-full object-cover cursor-pointer'/>
        </div>
  )
}

export default Header
