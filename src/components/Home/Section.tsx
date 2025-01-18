

import React from 'react'
import mediate2 from '../../public/Images/meditate2.png'
import meditateImg from '../../public/Images/meditateImg.png'
import candleImg from '../../public/Images/candleImg.png'
import candleJarImg from '../../public/Images/candleJarImg.png'
import leavesImg from '../../public/Images/leavesImg.png'
import floatImg from '../../public/Images/floatingImg.png'


function Section() {
    return (
        <>
            <section className='bg-[#ECDFDB] h-[1200px] '>
                <div className='flex pl-20 sm:pl-10 flex-col gap-4   '>
                    <div className='w-11/12 mt-4 '>
                        <img className='w-full h-[366px] object-cover' src={leavesImg} alt="" />
                        <p className='w-80 mt-4'>We make products with quality materials so you get a very good product</p>
                    </div>

                    {/* second-row-img */}
                    <div className='flex gap-4'>
                        <div className=' w-[45.8333335%] h-72 '>
                            <img className='w-full h-full object-cover' src={candleJarImg} alt="" />
                        </div>
                        <div className=' w-[45.8333335%] h-72 '>
                            <img className='w-full h-52 object-cover' src={candleImg} alt="" />
                            <p className='font-bold'>Durable</p>
                            <p className='w-72 sm:w-40'>The life of the candle reaches 6 months since it is used and still feels the smell</p>
                        </div>
                    </div>

                    {/* second-row-img */}
                    <div className='flex gap-4'>
                        <div className=' w-[45.8333335%] h-72  '>
                            <img className='w-full h-52 object-cover' src={meditateImg} alt="" />
                            <p className='font-bold'>calm</p>
                            <p className='w-72 sm:w-44'>The aroma emitted by the candles soothes the feeling and the room is of course very durable</p>
                        </div>
                        <div className='w-[45.8333335%] h-72'>
                            <img className='w-full h-full object-cover' src={mediate2} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-gradient-to-t from-[#7A6457] to-[#AA9B93] flex flex-col items-center relative'>
                <h1 className='font-bold text-white text-[6em] sm:text-[4em] text-center w-[900px] sm:w-fit absolute top-24 sm:top-2'>Fragrance Room</h1>
                <img className='bounce w-[700px] ' src={floatImg} alt="candleImg" />
                <button className='w-72 bg-black text-white uppercase rounded-2xl h-9 relative bottom-14 sm:bottom-10'>find product</button>
            </div>
        </>
    )
}

export default Section