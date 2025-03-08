import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function AboutPage()
{
  return (
    <section id="about" className="w-full h-[200vh] bg-[#2b3530]">
      <div className="w-full h-[100vh] flex flex-col lg:flex-row items-center gap-1">
        <div className="text-[1rem] md:text-[2rem] text-[#CED1BF] capitalize w-[90%] lg:w-[35%] text-center p-4 grid place-content-center">
          Welcome to AsclepiusAI – The Future of Predictive Healthcare
        </div>
        <div className="w-[90%] lg:w-[65%] h-[100vh] grid place-content-center">
          <div className="w-full sm:h-[70vh] lg:p-8">
            <img src="/Microscope.jpg" alt="Microscope Image" className="sm:h-full sm:w-full sm:object-fill"/>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh]">
        <div className="w-[35%] h-[100vh] grid place-content-center">
          <p className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={ faBars } size="2xl" className="text-[#CED1BF] translate-y-1" />
            <span className="text-[#CED1BF] capitalize text-[3rem]">Introduction</span>
          </p>
          
        </div>
      </div>
    </section>
  )
}