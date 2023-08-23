import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

        <div className='w-4/5 my-16'>
          {accordionItems.map((item, index) => (
            <div key={index}>
              <button
                className='w-full flex justify-between items-center p-4 text-left border-b'
                onClick={() => toggleAccordion(index)}
              >
                <span className='m-4 text-white/70'>{item.question}</span>
                <span className='text-white/70'>{activeIndex === index ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: { height: "auto" },
                      collapsed: { height: 0 }
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className='overflow-hidden'
                  >
                    <div className='px-16 flex items-center justify-center leading-loose py-10 text-white bg-orange-600/20 shapeQ'>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default QuestionBox;