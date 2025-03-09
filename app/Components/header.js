import Link from "next/link";


export default function Header()
{
  const navItems = "capitalize  font-basic text-[1rem] md:text-lg text-[#CED1BF] shadow-text-light hover:text-[#41A1BC]";
  const btnStyles = "capitalize  w-[8rem] py-2 blur-background-max hover:text-[#41A1BC] shadow-text-light text-[1.25rem]";


  return (
    <header className="w-full h-[8rem] absolute top-0 left-0 flex flex-row items-center justify-between lg:justify-evenly p-[1.5rem] z-50">
      <div className="h-[10rem] w-[10rem] grid content-center mx-8">
          <img src="/Logo.png" alt="Company's logo" />
      </div>
      <div className="md:hidden">
        <button className="md:hidden menuButton">
          <div className="menuIcon"></div>
        </button>
        {/* <Navbar isClicked={isHamClicked} isLogged={isLogged} /> */}
      </div>
      <div className={`hidden md:flex flex-row`}>
          <dl className="flex flex-row items-center justify-center gap-[1.25rem] lg:gap-[2rem]">
            <dd>
              <a href="#about" className={ navItems }>
                About
              </a>
            </dd>
            <dd>
              <a href="#health" className={ navItems }>
                Health
              </a>
            </dd>
            <dd>
              <a href="#implementation" className={ navItems }>
                Implementation
              </a>
            </dd>
            <dd>
              <a href="#innovation" className={ navItems }>
                Innovation
              </a>
            </dd>
            <dd>
              <a href="#contact" className={ navItems }>
                Contact
              </a>
            </dd>
          </dl>
        </div> 
        <div className="text-[#CED1BF] md:flex flex-row gap-2 pl-[1rem] lg:pl-[2rem] hidden">
              <>
                <Link href='\model'>
                  <button 
                    className={btnStyles}
                  >
                    Try it Out
                  </button>
                </Link>
              </>
        </div>  
      </header>
  );
}
              