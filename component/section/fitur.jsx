
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Real-Time Water Level Monitoring",
    description:
      "Monitoring changes in water levels in real time to support the monitoring of river conditions.",
    image: "/image/Body1.svg",
  },
  {
    title: "Rainfall Measurement",
    description:
      "Measuring rainfall intensity using integrated sensors to collect and evaluate environmental conditions.",
    image: "/image/body2.svg",
  },
  {
    title: "Threshold-Based Alerts",
    description:
      "Provides notifications when monitored values reach or exceed predefined risk thresholds.",
    image: "/image/body4.svg",
  },
  {
    title: "Solar-Powered Station",
    description:
      "Utilizing solar energy to support the operation of monitoring equipment in remote locations.",
    image: "/image/body5.svg",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
        w-full
        border-y
        border-white/20
        bg-linear-to-r
        from-[#071e29]
        via-[#1B292B]
        to-[#0d2b3]
        px-6
        py-20
        text-foreground
        lg:py-[100px]
      "
    >
      <div className="mx-auto w-full max-w-[1000px]">

        
        <div className="mb-12">
          <h2 className="text-3xl font-bold leading-tight md:text-[40px]">
            Build To Monitor. Designed to inform.
          </h2>

          <p className="mt-3 text-base text-foreground/70 md:text-lg">
            Environmental insights from the river to your dashboard
          </p>
        </div>

        {/* Grid  */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-[140px]
            gap-y-12
            md:grid-cols-2
            lg:gap-y-16
          "
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="
                flex
                min-h-[350px]
                flex-col
                rounded-[14px]
                bg-brand
                p-4
                text-background
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Gambar  */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 430px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Judul fitur */}
              <h3 className="mt-3 text-[18px] font-bold leading-tight">
                {feature.title}
              </h3>

              {/* Deskripsi */}
              <p className="mt-4 text-[13px] leading-5">
                {feature.description}
              </p>

              {/* Tombol */}
              <Link
                href="/features"
                className="
                  group
                  mt-auto
                  flex
                  items-center
                  justify-between
                  pt-6
                "
              >
                <span
                  className="
                    rounded-md
                    border
                    border-background
                    px-3
                    py-1
                    text-xs
                    font-medium
                    transition-colors
                    duration-300
                    group-hover:bg-background
                    group-hover:text-brand
                  "
                >
                  View Details
                </span>

                <span
                  aria-hidden="true"
                  className="
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
