import { useState } from 'react';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function RefundAccordian() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
  };
  return (
    <>
        <div className=" sm:ml-[-10px]  ">
        {/* Accordion Question 1 */}
        <div
          className={
            activeIndex === 1
              ? 'my-2 transition-all  duration-500 border-b-2 sm:h-32 overflow-hidden'
              : 'my-2 transition-all duration-500 border-b-2 h-14 sm:h-14  overflow-hidden'
          }
        >
          <div className="flex items-center  justify-between">
            <p>Where do i get my refund?</p>
            {activeIndex === 1 ? (
              <MinimizeOutlinedIcon
                onClick={() => handleToggle(1)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            ) : (
              <AddOutlinedIcon
                onClick={() => handleToggle(1)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            )}
          </div>
          {activeIndex === 1 && (
            <p className="text-sm my-3 text-[#555659] sm:w-56 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti adipisci laboriosam consequatur corrupti nesciunt.
            </p>
          )}
        </div>

        {/* Accordion Question 2 */}
        <div
          className={
            activeIndex === 2
              ? 'my-2 transition-all duration-500 border-b-2 h-32 sm:h-32 overflow-hidden'
              : 'my-2 transition-all duration-500 border-b-2 h-14 sm:h-14 overflow-hidden'
          }
        >
          <div className="flex items-center justify-between">
            <p>How long does a refund take to process?</p>
            {activeIndex === 2 ? (
              <MinimizeOutlinedIcon
                onClick={() => handleToggle(2)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            ) : (
              <AddOutlinedIcon
                onClick={() => handleToggle(2)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            )}
          </div>
          {activeIndex === 2 && (
            <p className="text-sm my-3 text-[#555659] sm:w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti adipisci laboriosam consequatur corrupti nesciunt.
              </p>
          )}
        </div>

        {/* Accordion Question 3 */}
        <div
          className={
            activeIndex === 3
              ? 'my-2 transition-all duration-500 border-b-2 h-32 sm:sm:h-32 overflow-hidden'
              : 'my-2 transition-all duration-500 border-b-2 h-14 sm:h-14 overflow-hidden'
          }
        >
          <div className="flex items-center justify-between">
            <p>Are the materials used for the manufacture of chemicals?</p>
            {activeIndex === 3 ? (
              <MinimizeOutlinedIcon
                onClick={() => handleToggle(3)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            ) : (
              <AddOutlinedIcon
                onClick={() => handleToggle(3)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            )}
          </div>
          {activeIndex === 3 && (
            <p className="text-sm my-3 text-[#555659] sm:w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti adipisci laboriosam consequatur corrupti nesciunt.
              </p>
          )}
        </div>

        {/* Accordion Question 4 */}
        <div
          className={
            activeIndex === 4
              ? 'my-2 transition-all duration-500 border-b-2 h-32 sm:h-32overflow-hidden'
              : 'my-2 transition-all duration-500 border-b-2 h-14 sm:h-14 overflow-hidden'
          }
        >
          <div className="flex items-center justify-between transition-all">
            <p>Can I resell wax products at a different price?</p>
            {activeIndex === 4 ? (
              <MinimizeOutlinedIcon
                onClick={() => handleToggle(4)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            ) : (
              <AddOutlinedIcon
                onClick={() => handleToggle(4)}
                className="text-red-900 mr-2 cursor-pointer"
              />
            )}
          </div>
          {activeIndex === 4 && (
            <p className="text-sm my-3 text-[#555659] sm:w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti adipisci laboriosam consequatur corrupti nesciunt.
              </p>
          )}
        </div>
      </div>
    </>
  )
}

export default RefundAccordian