import Image from 'next/image';
import NavItem from '@/components/Header/NavItem';
import { images, navigations } from '@/constants';

const Nav = [
  { url: navigations.SIMULATION, name: '시뮬레이터' },
  { url: navigations.INFORMATION, name: '정보' },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <div className="flex items-center justify-between px-20 h-16 bg-mainBlack min-w-[375px]">
        {/* 로고 */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <Image
            src={images.THUMBNAIL}
            alt="logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </div>

        {/* 네비게이션 */}
        <nav className="flex space-x-6">
          {Nav.map((nav, index) => (
            <NavItem key={index} href={nav.url} text={nav.name} />
          ))}
        </nav>
      </div>
    </header>
  );
}
