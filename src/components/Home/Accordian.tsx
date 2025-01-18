import { useState } from 'react';
import ProductAccordian from './ProductAccordian';
import DeliveryAccordian from './DeliveryAccordian';
import RefundAccordian from './RefundAccordian';





function Accordion() {
    const [showAccordian, setShowAccordian] = useState(0)


    return (
        <>
            <div className="bg-[#F9F5EA] p-10 border-2">
                <p className="font-bold sm:mb-8">FAQS</p>

                <div className="flex sm:flex-col  items-center gap-24 sm:gap-0 justify-center w-11/12 m-auto sm:m-0">
                    <div className='flex flex-col sm:flex-row  gap-2 justify-center sm:h-24  h-96 w-80'>

                            <button onClick={() => setShowAccordian(0)} className={showAccordian === 0 ? "activeBtn": "accordianBtn"}>Product & Promos</button>
                            <button onClick={() => setShowAccordian(1)} className={showAccordian === 1 ? "activeBtn": "accordianBtn"}>Delivery</button>
                            <button onClick={() => setShowAccordian(2)} className={showAccordian === 2 ? "activeBtn": "accordianBtn"}>Refunds</button>
                     
                    </div>

                    {/* toggle accordians */}
                    {
                        showAccordian === 0 ? <ProductAccordian /> : showAccordian === 1 ? <DeliveryAccordian /> : showAccordian === 2 ? <RefundAccordian /> : ""
                    }

                </div>
            </div>
        </>
    );
}

export default Accordion;
