import candleBackground from '../../public/bg-images/landingpageImg.png'
import Accordian from './Accordian'
import Popular from './Popular'
import Section from './Section'
function LandingPage() {
  return (
    <>
        <div className=" h-[710px] flex sm:flex-col-reverse">
            <div  style={{ backgroundImage: `url(${candleBackground})` }} className="w-[759px] sm:w-full h-full bg-cover sm:h-96 sm:bg-cover sm:bg-center bg-no-repeat "></div>
            <div className="bg-[#F9F5EA] sm:h-96  h-full flex flex-col justify-center sm:items-center sm:text-center  w-[700px] sm:w-full ">
               <div className='w-9/12 ml-10'>
               <span className="uppercase tracking-wider w-52 ">#candlexexperience</span>
                <p className="font-bold text-4xl w-[400px] sm:w-[300px] my-2">Always <span className="text-[#C9A489]">cool and soothe </span>your feelings avaliable in
                    a variety of <span className="text-[#C9A489] italic font-smalltextFont">candle.</span>
                </p>
                <button className=" w-64 my-2 rounded-2xl h-10 bg-green-900 text-sm uppercase  text-white cursor-pointer">Discover Products</button>
               </div>
            </div>
        </div>
        <Popular/>
        <Section/>
        <Accordian/>
    </>
  )
}

export default LandingPage