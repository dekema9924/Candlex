import React from 'react'

function Footer() {
    return (
        <>
            <footer className='bg-black text-white h-64 sm:h-[670px] '>
                <div className='flex sm:flex-col items-center justify-between'>
                    <div className='flex sm:flex-col items-start gap-4 w-[500px] sm:w-full'>
                        <p className="font-bold italic mt-4 ml-10">Candl<span className="font-normal text-xl">ex</span></p>
                        <ul className=' w-80 uppercase relative text-sm h-40 p-4 flex flex-col flex-wrap sm:gap-4 sm:h-72 '>
                            <li>New Arrivals</li>
                            <li>about</li>
                            <li>influencer</li>
                            <li>blog</li>
                            <li>contact us</li>
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>twitter</li>
                            <li>linkdln</li>
                        </ul>
                    </div>

                    <div className=' w-56 sm:w-full sm:p-4 sm:flex sm:gap-8 sm:items-center '>
                        <p className='w-40 sm:w-64'>stay in the know -- we'll send you offers & more.</p>
                        <button className='border-2 border-[#C9A489] cursor-pointer my-2 rounded-2xl w-24 h-9 capitalize'>Sign Up</button>
                    </div>

                </div>
                <hr className='border-2 block w-11/12 m-auto border-t-0 mt-4' />
            <div className='flex justify-between sm:justify-start my-7 m-auto text-sm w-11/12 sm:flex-col sm:gap-5 '>
                <p className='ml-6 sm:ml-4'>2025 Candlex. All rights reserved.</p>
                <p className='mr-6 sm:ml-4'>Design made by <a href="http://">TeamUp Agency</a></p>
            </div>


            </footer>
           
        </>
    )
}

export default Footer