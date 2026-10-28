
import Image from "next/image";
import Button from "@/component/ui/button";
import ShowreelButton from "@/component/ui/showreel-button";

export default function Hero() {
  return (
    <main className="min-h-screen bg-background px-6 pt-14 pb-20 text-foreground xl:px-[30px] xl:pt-[47.5px]">

      <div className="
             mx-auto
             grid
             w-full
             max-w-[1440px]
              grid-cols-1
              items-center
             gap-12
             xl:grid-cols-[minmax(0,612px)_minmax(0,550px)]
             xl:gap-6
             xl:justify-center
      ">
        <div className="w-full max-w-[612px] xl:-translate-y-8">

          <p className="text-[21px] leading-[22px] text-foreground/90 font-sans">
            Monitor Water. Detect Risk. Protect Communities.
          </p>

          <h1 className="mt-2 text-[44px] font-semibold leading-[52px] tracking-[-0.03em] text-foreground sm:text-[60px] sm:leading-[76px] font-sans">
            <span className="sm:block">
              HydroPulse: Smart
            </span>{" "}

            <span className="sm:block">
              Flood Monitoring
            </span>{" "}

            <span className="sm:block">
              Station.
            </span>
          </h1>

          <p className="mt-[30px] text-[18px] leading-[30px] text-foreground/80 sm:text-[21px] sm:leading-[31px] font-sans">
            An Internet of Things (IoT)-based flood monitoring device
            designed to track water levels, rainfall, and environmental
            conditions through sensors integrated with a communication
            system and a monitoring dashboard.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/features">
              Explore
            </Button>
            <ShowreelButton href="/showreel.mp4" />
          </div>

        </div>
         <div className="group w-full max-w-[550px] overflow-hidden rounded-[24px] xl:justify-self-end">
        <Image
             src="/image/HeroImage.svg"
             alt="HydroPulse Smart Flood Monitoring Station"
            width={630}
            height={796}
            priority
            className="
                     block
                     aspect-[630/796]
                     w-full
                     object-cover
                     transition-transform
                      duration-500
                      ease-in-out
                      group-hover:scale-105
                    "
                />
            </div>


      </div>

    </main>
  );
}
