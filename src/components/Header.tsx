import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Box } from "@mui/material";

function Header() {
    const [hamburgerMenuIsClicked, setHamburgerMenuClicked] = useState(false)

    //disable scroll if HamburgerOpen
    useEffect(() => {
        if (hamburgerMenuIsClicked) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [hamburgerMenuIsClicked]);


    return (
        <>
            <div className="h-8 pt-1 bg-black text-white text-center text-sm">
                <p>FREE Shipping on orders over $1000🎉</p>
            </div>


            <header className=" flex items-center bg-[#F9F5EA] ">
                <div className="w-full  sm:w-full flex items-start  ">

                    <ul className=" w-full text-black h-10 flex items-center pl-2 sm:hidden bg-[#FBEDD3]">
                        <Link className="linkStyle" to={'/shop'}>Shop</Link>
                        <Link className="linkStyle" to={'/about'}>About</Link>
                        <Link className="linkStyle" to={'/blog'}>Blog</Link>
                        <Link className="linkStyle" to={'/testimonial'}>Testimonial</Link>
                    </ul>
                    <div onClick={() => setHamburgerMenuClicked(!hamburgerMenuIsClicked)} className=" w-8 h-8  hidden sm:flex ml-4 flex-col justify-center cursor-pointer">
                        <span className={!hamburgerMenuIsClicked ? "block border-2 border-t-0 border-black transition-all duration-300 " : "border-2 border-t-0 border-black hidden transition-all duration-300 "}></span>
                        <span className={!hamburgerMenuIsClicked ? "block border-2 border-t-0 my-2 border-black transition-all duration-300 " : "block border-2 border-t-0 border-black rotate-45 transition-all duration-300 "}></span>
                        <span className={!hamburgerMenuIsClicked ? "block border-2 border-t-0 border-black transition-all duration-300 " : "block border-2 border-t-0 border-black rotate-[-220deg] transition-all duration-300 "}></span>
                    </div>

                </div>
                <div className="w-11/12  h-full  sm:w-full">

                    <div className="flex items-center  h-10 justify-between">
                        <Link to={'/'} className="font-bold italic  ml-10">Candl<span className="font-normal text-xl">ex</span></Link>
                        <div className="flex gap-4 items-center justify-between pr-4  ">
                            <Box className='sm:hidden cursor-pointer'><SearchOutlinedIcon /></Box>
                            <Box className='sm:hidden cursor-pointer'><PermIdentityOutlinedIcon /></Box>
                            <Box className="block cursor-pointer"><LocalMallOutlinedIcon /></Box>
                            <button className="w-24 sm:hidden font-bold border-2 border-gray-500 bg-transparent h-8 rounded-3xl ">Log In</button>
                        </div>
                    </div>

                </div>
            </header>
            <ul className={!hamburgerMenuIsClicked ? "absolute w-96 right-[800px] transition-all duration-700 text-black h-[100vh] sm:flex hidden justify-center gap-10 items-center pl-2 bg-[#FBEDD3] flex-col z-50" : "w-96 z-50 text-black h-[100vh] sm:flex hidden justify-center gap-10  items-center pl-2 bg-[#FBEDD3] flex-col rounded-4xl transition-all duration-700 absolute right-[120px]"}>
                <Link onClick={()=>setHamburgerMenuClicked(false)} className="linkStyle" to={'/shop'}>Shop</Link>
                <Link onClick={()=>setHamburgerMenuClicked(false)} className="linkStyle" to={'/about'}>About</Link>
                <Link onClick={()=>setHamburgerMenuClicked(false)} className="linkStyle" to={'/blog'}>Blog</Link>
                <Link onClick={()=>setHamburgerMenuClicked(false)} className="linkStyle" to={'/testimonial'}>Testimonial</Link>
                <button className="w-24 font-bold border-2 border-gray-500 bg-transparent h-8 rounded-3xl ">Log In</button>
            </ul>


        </>
    )
}

export default Header