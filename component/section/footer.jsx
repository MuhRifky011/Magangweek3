
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Form belum terhubung ke layanan pengiriman.");
  }

  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-[1440px]"
    >
      
      <section
        className="
          bg-[#73F2E9]
          px-6
          py-12
          text-black
          lg:px-16
          lg:py-14
          rounded-t-[40px]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1120px]
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          
          <div className="max-w-[390px]">
            <h2
              className="
                text-[30px]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                md:text-[38px]
              "
            >
              Ready to explore smarter flood monitoring?
            </h2>

            <p
              className="
                mt-5
                max-w-[340px]
                text-[16px]
                leading-[1.65]
                md:text-[20px]
              "
            >
              Connect with us to learn more about the
              HydroPulse concept and its potential applications.
            </p>
          </div>

          
          <form
            onSubmit={handleSubmit}
            className="
              w-full
              rounded-[24px]
              bg-[#020707]
              p-6
              text-white
              lg:ml-auto
              lg:max-w-[520px]
              lg:p-8
            "
          >
            {/* CTA */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullname"
                  className="text-xs font-medium"
                >
                  Full Name
                </label>

                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter Fullname"
                  autoComplete="name"
                  required
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    text-sm
                    text-black
                    outline-none
                    focus:ring-2
                    focus:ring-[#73F2E9]
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@gmail.com"
                  autoComplete="email"
                  required
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    text-sm
                    text-black
                    outline-none
                    focus:ring-2
                    focus:ring-[#73F2E9]
                  "
                />
              </div>
            </div>

             
            <div className="mt-4">
              <label
                htmlFor="organization"
                className="text-xs font-medium"
              >
                Organization
              </label>

              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Enter your organization"
                className="
                  mt-2
                  h-11
                  w-full
                  rounded-md
                  bg-white
                  px-3
                  text-sm
                  text-black
                  outline-none
                  focus:ring-2
                  focus:ring-[#73F2E9]
                "
              />
            </div>

             
            <div className="mt-4">
              <label
                htmlFor="message"
                className="text-xs font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your interest"
                required
                rows={4}
                className="
                  mt-2
                  w-full
                  resize-none
                  rounded-md
                  bg-white
                  p-3
                  text-sm
                  text-black
                  outline-none
                  focus:ring-2
                  focus:ring-[#73F2E9]
                "
              />
            </div>

             
            <button
              type="submit"
              className="
                mt-4
                w-full
                rounded-md
                bg-[#73F2E9]
                py-3
                text-sm
                font-semibold
                text-black
                transition-colors
                duration-300
                hover:bg-white
              "
            >
              Send
            </button>

            {status && (
              <p
                role="status"
                className="mt-3 text-xs text-white/80"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

       
      <div
        className="
          relative
          isolate
          min-h-[200px]
          overflow-hidden
          bg-black
          px-6
          py-8
          text-white
          lg:min-h-[240px]
          lg:px-10
        "
      >
         
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            gap-6
            lg:grid
            lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
            lg:items-center
            lg:gap-6
          "
        >
           
          <div className="flex flex-col gap-4">
            <Link
              href="/#home"
              className="
                inline-flex
                self-start
                items-center
                gap-2
                rounded-[16px]
                bg-[#73F2E9]
                px-4
                py-2
                text-black
              "
            >
              <span className="text-[28px] leading-none">
                Rif
              </span>

              <span className="h-8 w-px bg-black/50" />

              <span className="text-[11px] leading-3">
                Techno
                <br />
                Industries
              </span>
            </Link>

             
            <p className="text-xs text-white/80 lg:hidden">
              Monitor Water. Detect Risk. Protect Communities.
            </p>
          </div>

           
          <nav
            aria-label="Footer navigation"
            className="
              flex
              flex-wrap
              items-center
              gap-5
              whitespace-nowrap
              text-xs
              sm:gap-8
              lg:justify-center
            "
          >
            <Link
              href="/#home"
              className="transition-colors hover:text-[#73F2E9]"
            >
              Dashboard
            </Link>

            <Link
              href="/#features"
              className="transition-colors hover:text-[#73F2E9]"
            >
              Features
            </Link>

            <Link
              href="/#contact"
              className="transition-colors hover:text-[#73F2E9]"
            >
              About Us
            </Link>
          </nav>

           
          <div
            className="
              hidden
              items-center
              justify-end
              gap-5
              whitespace-nowrap
              lg:flex
            "
          >
            <span className="shrink-0 text-[16px] font-normal text-white">
              Follow Us
            </span>

            <div className="flex shrink-0 items-center gap-6">
              <Image
                src="/image/Instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-110
                "
              />

              <Image
                src="/image/LinkedIn.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-110
                "
              />

              <Image
                src="/image/YouTube.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-110
                "
              />
            </div>
          </div>
        </div>

         
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-55px]
            left-1/2
            z-0
            hidden
            h-[148px]
            w-[735px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-t-[420px]
            bg-[#73F2E9]
            lg:flex
          "
        >
          <p className="px-4 text-center text-[24px] font-medium text-black">
            Monitor Water. Detect Risk. Protect Communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
