import { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNav from './MobileNav';

const NavigationBar: FC = () => {
  const router = useRouter();
  const [fixedNavigation, setFixedNavigation] = useState(true);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setFixedNavigation(() => window.pageYOffset < 1);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const navLinks = [
    { title: 'Company', href: '/' },
    { title: 'Pricing', href: '/' },
    { title: 'Demo', href: '/' },
  ];

  const desktopNav = navLinks.map((item) => (
    <Link href={item.href} key={item.href}>
      <a
        className={`mx-6 px-2 h-full flex items-center border-b-2 border-transparent hover:border-teal-dark hover:text-teal-dark transition-colors duration-200 ${
          router.pathname === item.href ? 'text-teal-dark' : ''
        }`}
      >
        <p className='text-lg font-black'>{item.title}</p>
      </a>
    </Link>
  ));

  const hamburgerClickHandler = () => {
    setMobileNavActive(() => true);
  };

  const hamburgerCloseHandler = () => {
    setMobileNavActive(() => false);
  };

  if (mobileNavActive) {
    return <MobileNav navLinks={navLinks} onCloseMenu={hamburgerCloseHandler}></MobileNav>;
  }

  return (
    <header
      className={`w-screen inline-flex p-4 z-50 transition-shadow duration-200 overflow-x-hidden h-20 md:h-24 bg-white ${
        fixedNavigation ? 'absolute' : 'fixed shadow'
      }`}
    >
      <div className='inline-flex items-center w-auto h-full'>
        <Link href='/'>
          <a className='text-2xl font-bold border-b-2 border-pink'>yourcompany.com</a>
        </Link>
      </div>
      <nav className='items-center justify-end hidden w-full md:inline-flex'>
        {desktopNav}
        <button className='px-5 py-3 mx-6 font-semibold text-white transition-colors duration-200 rounded-full shadow bg-teal-dark hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal-light'>
          Contact
        </button>
      </nav>

      <button onClick={hamburgerClickHandler} className='block p-2 ml-auto md:hidden'>
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
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default NavigationBar;
