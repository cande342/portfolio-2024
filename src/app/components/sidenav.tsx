import NavLinks from './nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 md:w-64 bg-bg-100">
<div className="mb-2 flex items-center justify-center p-4 cursor-pointer">
  <Image
    src="/img/perfil1.jpg"
    alt="Logo"
    width={300}
    height={300}
    priority={true}
    className="aspect-square rounded-full border-2 border-primary-200"
  />
</div>
      <div className="flex-grow flex flex-row justify-around flex-direction:start mt-4 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
