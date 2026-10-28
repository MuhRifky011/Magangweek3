import Link from "next/link";

export default function Button({
  children,
  href = "#",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        min-h-12
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-brand
        px-6
        py-3
        text-sm
        font-semibold
        text-background
        transition-colors
        duration-300
        hover:bg-white
        ${className}
      `}
    >
      {children}

      <span aria-hidden="true">→</span>
    </Link>
  );
}