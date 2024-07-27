'use client';
import Link from 'next/link';
import {
  UserIcon,
  HomeIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Sobre Mi', 
    href: '/',
    icon: UserIcon },
  {
    name: 'Proyectos',
    href: '/pages/projects',
    icon: FolderIcon,
  },
  { name: 'Formación y experiencias', 
    href: '/pages/experience',
    icon: HomeIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 bg-black-50 p-3 text-lg font-medium 
                      hover:bg-primary-300 hover:bg-opacity-25 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
