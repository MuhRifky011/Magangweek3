
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="home"
      className="
        mx-auto
        w-full
        max-w-[1440px]
        rounded-b-[28px]
        bg-linear-to-r
        from-[#173B3C]
        via-[#0B2527]
        to-[#031115]
        px-4
        py-4
        text-foreground
        sm:px-6
        lg:h-[138px]
        lg:px-5
        lg:py-0
      "
    >
      {/* MAIN NAVBAR */}
      <div
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          lg:h-full
          lg:gap-6
        "
      >
        {/* LOGO */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="
            inline-flex
            shrink-0
            items-center
            gap-2
            rounded-[20px]
            bg-brand
            px-3
            py-3
            text-background
            sm:gap-3
            sm:px-5
            lg:rounded-[22px]
          "
        >
          <span
            className="
              text-[30px]
              font-normal
              leading-none
              sm:text-[36px]
              xl:text-[44px]
            "
          >
            Rif
          </span>

          <span
            className="
              h-9
              w-px
              bg-background/60
              sm:h-11
            "
          />

          <span
            className="
              text-[12px]
              font-normal
              leading-[15px]
              sm:text-[16px]
              sm:leading-[20px]
              xl:text-[18px]
              xl:leading-[22px]
            "
          >
            Techno
            <br />
            Industries
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-center
            gap-4
            whitespace-nowrap
            text-base
            lg:flex
            xl:gap-[78px]
            xl:text-[22px]
          "
        >
          <Link
            href="/#home"
            className="
              transition-colors
              duration-300
              hover:text-brand
            "
          >
            Dashboard
          </Link>

          <Link
            href="/#features"
            className="
              transition-colors
              duration-300
              hover:text-brand
            "
          >
            Features
          </Link>

          <Link
            href="/#contact"
            className="
              transition-colors
              duration-300
              hover:text-brand
            "
          >
            About Us
          </Link>
        </nav>

        {/* DESKTOP START PROJECT BUTTON */}
        <Link
          href="/#contact"
          className="
            hidden
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-brand
            px-3
            py-2
            text-base
            font-normal
            whitespace-nowrap
            text-background
            transition-colors
            duration-300
            hover:bg-white
            lg:inline-flex
            xl:text-[22px]
          "
        >
          Start a project

          <span aria-hidden="true">
            →
          </span>
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Tutup menu" : "Buka menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="
            flex
            size-[52px]
            shrink-0
            flex-col
            items-center
            justify-center
            gap-[6px]
            rounded-[12px]
            bg-black
            transition-colors
            duration-300
            hover:bg-neutral-800
            lg:hidden
          "
        >
          {menuOpen ? (
            <span
              aria-hidden="true"
              className="
                text-[36px]
                leading-none
                text-white
              "
            >
              ×
            </span>
          ) : (
            <>
              <span className="h-[4px] w-[30px] rounded-sm bg-white" />
              <span className="h-[4px] w-[30px] rounded-sm bg-white" />
              <span className="h-[4px] w-[30px] rounded-sm bg-white" />
            </>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`
          flex-col
          gap-5
          border-t
          border-white/20
          pt-5
          pb-3
          text-lg
          lg:hidden
          ${menuOpen ? "mt-5 flex" : "hidden"}
        `}
      >
        <Link
          href="/#home"
          onClick={closeMenu}
          className="
            transition-colors
            hover:text-brand
          "
        >
          Dashboard
        </Link>

        <Link
          href="/#features"
          onClick={closeMenu}
          className="
            transition-colors
            hover:text-brand
          "
        >
          Features
        </Link>

        <Link
          href="/#contact"
          onClick={closeMenu}
          className="
            transition-colors
            hover:text-brand
          "
        >
          About Us
        </Link>

        <Link
          href="/#contact"
          onClick={closeMenu}
          className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-lg
            bg-brand
            px-4
            py-2
            text-background
            transition-colors
            duration-300
            hover:bg-white
          "
        >
          Start a project
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}
