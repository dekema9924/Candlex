import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { candleJson } from '../../Helpers/CandleData';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';



function Shop() {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(1);

    const toggleDropdown = (index: number) => {
        setActiveDropdown(prevIndex => (prevIndex === index ? null : index));
    };


    return (
        <>
            <div className='flex  gap-10 sm:gap-2 pt-24 sm:flex-col '>
                {/* sidebarFilter */}
                <div className='border-2 border-[#C9A489] sm:hidden ml-10  w-64 h-[530px] rounded-2xl '>
                    <p className=' h-10 border-[#C9A489]   pt-2 pl-4 border-b-2'>Filter</p>
                    <div className={activeDropdown === 1 ? 'border-b-2 border-[#C9A489] py-4 h-12 overflow-hidden ' : "border-b-2 border-[#C9A489] py-4 "}>
                        {/* aroma Dropdown */}
                        <div className='flex justify-between'>
                            <p className='ml-4 font-semibold'>Aroma Level</p>
                            <KeyboardArrowDownOutlinedIcon onClick={() => toggleDropdown(1)} className={activeDropdown !== 1 ? 'mr-4 cursor-pointer' : 'mr-4 cursor-pointer rotate-[-90deg]'} />
                        </div>
                        <div className='ml-4 '>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="soft">Soft</label>
                            </div>
                            <div className='flex gap-2 py-3 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="Meduim">Meduim</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="strong" />
                                <label htmlFor="soft">Strong</label>
                            </div>
                        </div>
                    </div>
                    <div className={activeDropdown !== 2 ? 'border-b-2 border-[#C9A489] py-4 h-12 overflow-hidden ' : "border-b-2 border-[#C9A489] py-4 "}>
                        {/* aromaType Dropdown */}
                        <div className='flex justify-between'>
                            <p className='ml-4 font-semibold'>Aroma Type</p>
                            <KeyboardArrowDownOutlinedIcon onClick={() => toggleDropdown(2)} className={activeDropdown === 2 ? 'mr-4 cursor-pointer' : 'mr-4 cursor-pointer rotate-[-90deg]'} />
                        </div>
                        <div className='ml-4'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="soft">Fruits</label>
                            </div>
                            <div className='flex gap-2 py-2 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="Meduim">Nature</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="strong" />
                                <label htmlFor="soft">Parfume</label>
                            </div>
                        </div>
                    </div>
                    <div className={activeDropdown !== 3 ? 'border-b-2 border-[#C9A489] py-4 h-12 overflow-hidden ' : "border-b-2 border-[#C9A489] py-4 "}>
                        {/* Product size*/}
                        <div className='flex justify-between'>
                            <p className='ml-4 font-semibold'>Product Size</p>
                            <KeyboardArrowDownOutlinedIcon onClick={() => toggleDropdown(3)} className={activeDropdown === 3 ? 'mr-4 cursor-pointer' : 'mr-4 cursor-pointer rotate-[-90deg]'} />
                        </div>
                        <div className='ml-4'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="soft">Small</label>
                            </div>
                            <div className='flex gap-2 py-2 items-center'>
                                <input type="checkbox" name="soft" />
                                <label htmlFor="Meduim">Meduim</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="strong" />
                                <label htmlFor="soft">Big</label>
                            </div>
                        </div>
                    </div>
                </div>


                {/* mobileDropdown */}
                <div className='hidden sm:flex mr-4 border-2  border-[#C9A489] justify-center w-40 sm:w-full h-10 items-center rounded-2xl'>
                    <p>SortBy:</p>
                    <select className='font-bold outline-none' name="filter" id="">
                        <option value="newest">AromaScent</option>
                        <option value="cheapest">AromaType</option>
                        <option value="lowPrice">Size</option>

                    </select>

                </div>


                {/* candles */}
                <div className='w-full'>
                    <div className='flex justify-between sm:flex-col-reverse '>
                        <p className='font-semibold text-4xl ml-4 mt-4'>Candles</p>
                        <div className='flex mr-4 border-2  border-[#C9A489] justify-center w-40 sm:w-full h-10 items-center rounded-2xl'>
                            <p>SortBy:</p>
                            <select className='font-bold outline-none' name="filter" id="">
                                <option value="newest">Newest</option>
                                <option value="cheapest">Cheapest</option>
                                <option value="lowPrice">Price ↓</option>
                                <option value="highPrice">Price ↑</option>

                            </select>

                        </div>
                    </div>

                    {/* mapCandles */}
                    <div className=' flex flex-wrap sm:justify-center gap-7 my-8'>
                        {
                            candleJson.map((candle) => {
                                return (
                                    <>
                                        <div key={candle.id} className=' w-56 h-42 sm:w-11/12'>
                                            <img className='w-full' src={candle.img} alt="candleImg" />

                                            <div className='flex justify-between my-2 items-center'>
                                                <p className='font-semibold text-sm tracking-wider capitalize'>{candle.name}</p>
                                                <div className=' w-14 flex gap-1'>
                                                <p className='font-semibold'>$<span>{candle.originalPrice}</span></p>

                                                    {
                                                        candle.discoutPrice !== null ? <p className='text-sm text-gray-400 line-through'>$<span>{candle.discoutPrice}</span></p>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                            <p className='text-sm font-thin'>{candle.scent}</p>
                                            <button className='border-2 uppercase text-xs font-semibold cursor-pointer border-[#C9A489] w-full rounded-2xl h-8 my-2 bg-transparent'>add to cart <AddCircleOutlinedIcon className='mx-2' /></button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>


            </div>

        </>
    )
}

export default Shop