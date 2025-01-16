
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Box } from "@mui/material";
import LandingPage from "./LandingPage/LandingPage";

function Header() {
    return (
        <>
            <div className="h-8 pt-1 bg-black text-white text-center text-sm">
                <p>FREE Shipping on orders over $1000🎉</p>
            </div>

            <header className=" flex items-center bg-[#F9F5EA]">
                <div className="w-full  sm:w-full flex items-start  ">

                    <ul className=" w-full text-black h-10 flex items-center pl-2 sm:hidden bg-[#FBEDD3]">
                        <Link className="linkStyle" to={'/shop'}>Shop</Link>
                        <Link className="linkStyle" to={'/about'}>About</Link>
                        <Link className="linkStyle" to={'/blog'}>Blog</Link>
                        <Link className="linkStyle" to={'/testimonial'}>Testimonial</Link>
                    </ul>
                    <div className=" w-8 h-8 hidden sm:flex ml-4 flex-col justify-center cursor-pointer">
                        <span className="block border-2 border-t-0 border-black"></span>
                        <span className="block border-2 border-t-0 my-2 border-black"></span>
                        <span className="block border-2 border-t-0 border-black"></span>
                    </div>

                </div>
                <div className="w-11/12  h-full  sm:w-full">

                    <div className="flex items-center  h-10 justify-between">
                        <p className="font-bold italic  ml-10">Candl<span className="font-normal text-xl">ex</span></p>
                        <div className="flex gap-4 items-center justify-between pr-4  ">
                            <Box className='sm:hidden cursor-pointer'><SearchOutlinedIcon /></Box>
                            <Box className='sm:hidden cursor-pointer'><PermIdentityOutlinedIcon /></Box>
                            <Box className="block cursor-pointer"><LocalMallOutlinedIcon /></Box>
                            <button className="w-24 sm:hidden font-bold border-2 border-gray-500 bg-transparent h-8 rounded-3xl ">Log In</button>
                        </div>
                    </div>

                </div>
            </header>
            <LandingPage />


        </>
    )
}

export default Header