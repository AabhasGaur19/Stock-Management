import { useEffect, useState } from 'react';
import sun from '../assets/sun.png';
import profile from '../assets/profile.png';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBack } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiPieChart2Fill, RiRobot3Fill } from "react-icons/ri";
import { TbClockDollar } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import Overview from '../components/overview';
import Portfolio from '../components/portfolio';
import Transactions from '../components/transactions';
import Recommendation from '../components/recommendation';
import Settings from '../components/settings';

export default function Dashboard() {
    const [page, setPage] = useState("Overview");
    const [name, setName] = useState("User");
    const [openNav, setOpenNav] = useState(false);

    const pages = {
        'Overview': <Overview />,
        'Portfolio': <Portfolio />,
        'Transactions': <Transactions />,
        'Recommendation': <Recommendation />,
        'Settings': <Settings />
    }

    useEffect(() => {
        setName("Suyash");
    }, [])

    return (
        <div className='w-full h-full flex'>
            {/* Side nav */}
            <nav className={`fixed top-0 ${openNav ? "left-0" : "-left-[80%]"} lg:left-0 z-10 h-full w-[80%] md:w-[45%] lg:w-[22%] py-6 px-6 lg:px-10 bg-[#202020] transition-all duration-400 overflow-y-scroll`}>
                <SideNav setOpenNav={setOpenNav} setPage={setPage} />
            </nav>

            <div className='absolute top-0 left-0 lg:left-[22%] z-0 h-full w-full lg:w-[78%] overflow-y-auto'>
                {/* Top nav */}
                <nav className='w-full h-[10%] md:h-[25%] lg:h-[10%] bg-white flex items-center justify-between py-5 px-5 lg:px-10'>
                    {/* for laptop screens */}
                    <div className='hidden lg:flex lg:items-end lg:gap-3'>
                        <h1 className='text-2xl text-black font-adlam'>Good Morning, {name}</h1>
                        <img src={sun} alt="Sun icon" className='w-10 h-10' />    
                    </div>

                    {/* for mobile screens */}
                    <div className='flex lg:hidden'>
                        <GiHamburgerMenu size={30} onClick={() => setOpenNav(true)} />
                    </div>

                    <img src={profile} alt="Profile image" className='w-12 h-12' />
                </nav>

                <div className='w-full bg-[#EDEDED]'>
                    {pages[page]}
                </div>
            </div>
        </div>
    )

}

function SideNav({setOpenNav, setPage}) {
    return (
        <div className='w-full h-full'>
            <IoArrowBack size={30} className='text-white block lg:hidden' onClick={() => setOpenNav(false)}/>

            <div className='flex flex-col items-center'>
                <img src={logo} alt="Company Logo" className='w-30 h-auto' />
                <h1 className='text-3xl text-white'>Stock App</h1>
            </div>

            <div className='flex flex-col gap-5 mt-12 ml-2'>
                <span className='flex items-center gap-5 p-2 rounded-md bg-transparent hover:bg-[#bcbcbc]/40 hover:cursor-pointer'
                onClick={() => {
                    setPage("Overview")
                    setOpenNav(false);
                }}>
                    <PiSquaresFourFill size={25} color='#ffffff' /> 
                    <h2 className='text-white text-xl'>Overview</h2>
                </span>
                <span className='flex items-center gap-5 p-2 rounded-md bg-transparent hover:bg-[#bcbcbc]/40 hover:cursor-pointer'
                onClick={() => {
                    setPage("Portfolio");
                    setOpenNav(false);
                }}>
                    <RiPieChart2Fill size={25} color='#ffffff' /> 
                    <h2 className='text-white text-xl'>Portfolio</h2>
                </span>
                <span className='flex items-center gap-5 p-2 rounded-md bg-transparent hover:bg-[#bcbcbc]/40 hover:cursor-pointer'
                onClick={() => {
                    setPage("Transactions");
                    setOpenNav(false);
                }}>
                    <TbClockDollar size={25} color='#ffffff' /> 
                    <h2 className='text-white text-xl'>Transactions</h2>
                </span>
                <span className='flex items-center gap-5 p-2 rounded-md bg-transparent hover:bg-[#bcbcbc]/40 hover:cursor-pointer'
                onClick={() => {
                    setPage("Recommendation");
                    setOpenNav(false);
                }}>
                    <RiRobot3Fill size={25} color='#ffffff' /> 
                    <h2 className='text-white text-xl'>Recommendation</h2>
                </span>
                <span className='flex items-center gap-5 p-2 rounded-md bg-transparent hover:bg-[#bcbcbc]/40 hover:cursor-pointer'
                onClick={() => {
                    setPage("Settings");
                    setOpenNav(false);
                }}>
                    <FaGear size={25} color='#ffffff' /> 
                    <h2 className='text-white text-xl'>Settings</h2>
                </span>
            </div>


        </div>
    )
}
