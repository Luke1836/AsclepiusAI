"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function HealthPage()
{
  return (
    <section id="health" className="w-full h-svh bg-[#30493D] flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-[50%] h-[5rem] md:h-[100vh] grid place-content-center">
        <p className="flex flex-row gap-4 items-center md:hidden">
          <FontAwesomeIcon icon={ faBars } size="2xl" className="text-[#CED1BF] translate-y-1 hidden md:block" />
          <span className="text-[#CED1BF] capitalize text-[3rem]">Health</span>
        </p>
        <div className="hidden md:block w-full h-full p-16" >
            <img src='/Photo-mini-project.jpg' alt='health' loading='lazy' className='w-full h-full object-fill'/> 
        </div>  
      </div>

      <div className='md:w-[50%] w-full h-[90vh] md:h-[100vh] flex flex-col items-center justify-start md:justify-center gap-8'>
          <p className='w-[80%] text-[#CED1BF] text-[1rem] lg:text-[1.5rem]'>
            &nbsp;&nbsp;&nbsp;<span className='text-[#CA7D57]'>Hypercholesterolemia</span> commonly referred to as high cholesterol, is a condition in which excess cholesterol circulates in the bloodstream, increasing the risk of heart disease and stroke. Cholesterol is a fatty substance essential for cell function, but an imbalance—especially high levels of LDL (low-density lipoprotein) cholesterol—can lead to plaque buildup in the arteries, restricting blood flow.
          </p>
          <p className='text-[#CED1BF] w-[80%] text-[1rem] lg:text-[1.5rem] hidden md:block'>
            &nbsp;&nbsp;&nbsp;Several factors contribute to <span className='text-[#CA7D57]'>Hypercholesterolemia</span>, some of which are controllable while others are genetic
          </p>
          <p className='text-[#CED1BF] w-[80%]'>
            &nbsp;&nbsp;&nbsp;<span className='text-[#CA7D57]'>Hypercholesterolemia</span> is often called a "silent" condition because it typically does not cause noticeable symptoms until complications arise.
          </p>
          <p className='text-[#CED1BF] w-[80%]'>
            Want to learn more: <Link href='\hypercholesterolemia'><span className='text-[#CA7D57]'>Click Here!</span></Link>
          </p>
      </div>
    </section>
  )
}