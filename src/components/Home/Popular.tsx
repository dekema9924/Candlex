import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import candleBg from '../../public/bg-images/popularcandle.png'
import { candleJson } from '../../Helpers/CandleData';
import { Link } from 'react-router-dom';

function Popular() {
    return (
        <>
            <div className='flex flex-col  justify-center items-center'>
                <p className='text-xs uppercase tracking-widest text-gray-400 mt-12'>trending</p>
                <h1 className='font-semibold mt-2'>Shop our popular candle products</h1>
                <div className='w-full flex justify-evenly my-10 sm:flex-col sm:items-center'>
                {
                            candleJson.slice(0,4).map((candle) => {
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
                <div style={{ backgroundImage: `url("${candleBg}")` }} className='w-11/12 h-[300px] p-4 border-2 bg-no-repeat bg-cover sm:bg-center flex flex-col justify-center'>
                    <p className='text-2xl flex items-center text-white gap-1'><span className='bg-black text-white block w-20 text-4xl p-2'>35%</span>OFF</p>
                    <p className='w-32 text-white mt-2'>Make the most of your candlex experience</p>
                </div>
                    <Link to={'/shop'}>
                    <button className='border-2 w-40 uppercase text-xs font-semibold cursor-pointer border-[#C9A489] rounded-2xl h-8  bg-transparent my-8'>Show more</button>

                    </Link>
            </div>
             


        </>
    )
}

export default Popular