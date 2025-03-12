import Link from "next/link";


export default function RoutingHeader( { visible } ) 
{
  const navItems = "capitalize font-sans text-[1rem] md:text-lg text-[#CED1BF] shadow-text-light hover:text-[#41A1BC]";
  const btnStyles = "capitalize font-sans w-[8rem] py-2 blur-background-max shadow-text-light hover:text-[#41A1BC] text-[1.25rem]";


  return (
    <header className={`w-full h-[8rem] flex flex-row items-center justify-between p-[1.75rem] z-50 border-b-2 border-b-[#CED1BF] ${visible}`}>
      <div className="h-[10rem] w-[10rem] grid content-center">
        <Link href="/">
          <img src="/Logo.png" alt="Company's logo" />
        </Link>
      </div>
      <div className="md:hidden">
        <button className="md:hidden menuButton">
          <div className="menuIcon"></div>
        </button>
      </div>
      <div className="hidden md:flex flex-row">
        <dl className="flex flex-row items-center justify-center gap-[1.25rem] lg:gap-[2rem]">
          <dd>
            <Link href="\#about">
              <span className={ navItems }>About</span>
            </Link>
          </dd>
          <dd>
            <Link href="\#health">
              <span className={ navItems }>Health</span>
            </Link>
          </dd>
          <dd>
            <Link href="\#implementation">
              <span className={ navItems }>Implementation</span>
            </Link>
          </dd>
          <dd>
            <Link href="\#innovation">
              <span className={ navItems }>Innovation</span>
            </Link>
          </dd>
          <dd>
            <Link href="\#contact">
              <span className={ navItems }>Contact</span>
            </Link>
          </dd>
        </dl>
      </div>
      <div className="text-[#CED1BF] md:flex flex-row gap-2 pl-[1rem] lg:pl-[2rem] hidden">
        <Link href="/model">
          <button className={btnStyles}>Try it Out</button>
        </Link>
      </div>
    </header>
  );
}
