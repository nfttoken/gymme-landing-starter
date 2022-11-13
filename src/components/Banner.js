import React from 'react';


// import data
import { banner } from '../data'
const Banner = () => {
// destructure banner data
const { titlePart1, titlePart2, subtitle, textBtn } = banner;

  return 
  <section className='bg-neutral-500 h-[790px]'>
    <div container mx-auto h-full >
      <div>
        {/*text*/}
        <div>
          <h1 className='h1 text-white mb-8 '>
            {titlePart1} <br /> 
            <span className='text-primarg-200 '>{titlePart2}</span>
          </h1>
          <p className='max-w-[415px] text-body-md lg:text-bodg-lg mb-8'>
            {subtitle}
          </p>
          <btn className='btn btn-sm lg:btn-lg btn-secondary'>
            {textBtn}
          </btn>
        </div>

        {/*image*/}
        <div>
          image
        </div>
      </div>
    </div>
  </section>
};

export default Banner;
