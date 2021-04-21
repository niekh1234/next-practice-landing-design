import { ReactNode, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  navLinks: {
    title: string;
    href: string;
  }[];
  onCloseMenu: Function;
};
const MobileNav = (props: Props) => {
  const closeButtonClickHandler = () => {
    props.onCloseMenu();
  };

  const nav = props.navLinks.map((link, index) => (
    <Link key={index} href={link.href}>
      <div onClick={closeButtonClickHandler} className='my-2 cursor-pointer'>
        <a className='self-center w-full px-12 text-2xl font-semibold text-teal-darkest'>
          {link.title}
        </a>
        <hr className='mx-4 my-2 border-teal-lighter' />
      </div>
    </Link>
  ));

  return (
    <Fade duration={200} className='fixed inset-0 z-50 w-screen h-screen'>
      <div className='w-full h-full bg-teal-lightest'>
        <div className='flex items-center justify-between h-20 p-4'>
          <Link href='/'>
            <a className='text-2xl font-bold border-b-2 border-pink'>yourcompany.com</a>
          </Link>
          <button onClick={closeButtonClickHandler} className='p-2'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>
        <nav className='flex flex-col justify-center w-full mt-32 '>{nav}</nav>
      </div>
    </Fade>
  );
};

export default MobileNav;
