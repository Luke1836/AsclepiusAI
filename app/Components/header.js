"use client";

import Link from "next/link";

export default function Header({ visible  }) 
{
  const navItems = "capitalize font-sans text-[1rem] md:text-lg text-[#CED1BF] shadow-text-light hover:text-[#41A1BC]";
  const btnStyles = " capitalize font-sans w-[8rem] py-1 shadow-text-light hover:text-[#CED1BF] text-[1.25rem] text-[#41A1BC]";

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`w-full h-[6rem] xl:h-[8rem] flex flex-row items-center justify-between p-[1.75rem] z-100 ${visible}`}>
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
            <button onClick={() => handleScroll("about")} className={navItems}>
              About
            </button>
          </dd>
          <dd>
            <button onClick={() => handleScroll("health")} className={navItems}>
              Health
            </button>
          </dd>
          <dd>
            <button
              onClick={() => handleScroll("implementation")}
              className={navItems}
            >
              Implementation
            </button>
          </dd>
          <dd>
            <button onClick={() => handleScroll("innovation")} className={navItems}>
              Innovation
            </button>
          </dd>
          <dd>
            <button onClick={() => handleScroll("contact")} className={navItems}>
              Contact
            </button>
          </dd>
        </dl>
      </div>
      <div className="md:flex flex-row gap-2 hidden p-0 rounded-2xl">
        <Link href="/model">
          <button className={`${btnStyles}`}>Try it Out</button>
        </Link>
      </div>
    </header>
  );
}
