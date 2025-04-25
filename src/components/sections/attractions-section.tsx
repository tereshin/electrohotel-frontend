import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import { CustomButton } from '../ui/custom-button';
import ArrowIcon from '../icons/ArrowIcon';

const AttractionsSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Image side */}
        <div className="w-full md:w-1/2 h-[0px] pb-[80%] md:pb-[50%] relative">
          <img 
            src="/images/about/1.jpg" 
            alt="Достопримечательности Электростали" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        
        {/* Content side */}
        <div className="w-full md:w-1/2 bg-[#FAF6F1] py-10 md:py-12 px-5 md:px-10 lg:px-[100px] flex flex-col justify-center">
          <div className="flex flex-col gap-10">
            <Title>
              13 достопри-<br />мечательностей Электростали
            </Title>
            
            <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
              Добро пожаловать в Электросталь — город с уникальным сочетанием промышленной истории и советской культуры! Сегодня мы расскажем вам о главных достопримечательностях: от живописных парков и мемориальных комплексов до ледовых дворцов и современных кинотеатров, которые сделают ваше пребывание в нашем городе по-настоящему насыщенным и запоминающимся.
            </p>
            
            <CustomButton variant="base2" className="w-max" onClick={() => {
              window.open('https://triptravel24.ru/32-13-dostoprimechatelnosti-jelektrostali.html', '_blank');
            }}>
                Подробнее
                <ArrowIcon/>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection; 