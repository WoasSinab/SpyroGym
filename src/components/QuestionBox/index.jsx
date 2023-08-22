import React, { useState } from "react";
import accordionItems from "./data";

const QuestionBox = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <div className='flex flex-col justify-center items-center py-16'>
        <h1 className='text-white font-semibold text-4xl text-center'>Frequently Asked Question</h1>

        {/* Start Accordion */}
        <div className='w-4/5 my-16'>
          {accordionItems.map((item, index) => (

            <div key={index}>
              {/* Start Accordion Button*/}
              <button
                className='w-full flex justify-between items-center p-4 text-left border-b'
                onClick={() => toggleAccordion(index)}
              >
                <span className='m-4 text-white/70 '>{item.question}</span> {/* Question */}
                <span className='text-white/70'>{activeIndex === index ? "-" : "+"}</span> {/* Plus Shape Accordion */}
              </button>
              {/* End Accordion Button*/}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  activeIndex === index ? "max-h-max" : "max-h-0"
                }`}
              >
                <div className='px-16 flex items-center justify-center leading-loose py-10 text-white bg-orange-600/20 shapeQ'>{item.answer}</div> {/* Question Answer */}
              </div>
            </div>

          ))}
        </div>
        {/* End Accordion */}

      </div>
    </main>
  );
};

export default QuestionBox;
