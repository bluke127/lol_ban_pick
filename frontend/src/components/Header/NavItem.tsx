import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PropType {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: PropType) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative text-sm md:text-base font-medium group ${isActive ? 'text-mainText' : 'text-gray-400'}`}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
