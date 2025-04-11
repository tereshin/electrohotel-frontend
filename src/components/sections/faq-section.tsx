import React from 'react';
import Accordion from '../ui/accordion';
import faqs from '@/lib/faqs';
import Title from '../ui/Title';

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="">
          <div className="flex flex-col gap-8">
            {faqs.map((faq) => (
              <Accordion 
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 