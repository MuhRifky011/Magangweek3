
export default function ShowreelButton({
  href = "/showreel.mp4",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        inline-flex
        items-center
        gap-4
        text-white
        transition-colors
        duration-300
        hover:text-brand
      "
    >
      <span
        className="
          flex
          h-13
          w-13
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-current
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        <span
          aria-hidden="true"
          className="
            ml-1
            h-0
            w-0
            border-y-[8px]
            border-y-transparent
            border-l-[13px]
            border-l-current
          "
        />
      </span>

      <span className="text-lg font-normal leading-tight">
        Watch
        <br />
        showreel
      </span>
    </a>
  );
}
