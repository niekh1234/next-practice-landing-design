import Link from 'next/link';

const Footer = () => {
  const footerItems = [
    {
      title: 'Services',
      content: [
        { link: 'Web design', to: '/' },
        { link: 'Web development', to: '/' },
        { link: 'Software migration', to: '/' },
      ],
    },
    {
      title: 'Company',
      content: [
        { link: 'About', to: '/' },
        { link: 'Contact', to: '/' },
        { link: 'Jobs', to: '/' },
        { link: 'Partners', to: '/' },
      ],
    },
    {
      title: 'Extra',
      content: [
        { link: 'Portfolio', to: '/' },
        { link: 'Tips', to: '/' },
        { link: 'Blog', to: '/' },
      ],
    },
    {
      title: 'Navigation',
      content: [
        { link: 'Portfolio', to: '/' },
        { link: 'Blog', to: '/' },
      ],
    },
  ];

  const footer = footerItems.map((section) => (
    <div key={section.title} className='flex flex-col space-y-2'>
      <p className='mb-2 font-bold tracking-widest uppercase text-teal-lighter'>{section.title}</p>
      {section.content.map((item) => (
        <Link key={item.link} href={item.to}>
          <a className='font-semibold hover:underline text-teal-lightest'>{item.link}</a>
        </Link>
      ))}
    </div>
  ));

  return (
    <footer className='w-screen px-4 py-16 bg-teal-darkest md:p-16'>
      <div className='max-w-6xl mx-auto'>
        <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-4 grid-auto-rows'>
          {footer}
        </section>
        <hr className='my-16 border border-teal-light bg-teal-light' />
        <section className='flex flex-col justify-between w-full space-y-8 md:items-center md:flex-row md:space-y-0'>
          <p className='text-xl font-semibold text-white'>
            © {new Date().getFullYear()} Your Company
          </p>
          <div>
            <input
              className='w-full px-4 py-2 rounded-lg md:w-64 md:mr-4 md:px-6 md:py-4 bg-teal-lightest focus:outline-none focus:ring-2 focus:ring-teal'
              placeholder='john@example.com'
            ></input>
            <button className='w-full px-4 py-2 mt-4 font-semibold text-white rounded-lg md:mt-0 md:w-auto md:px-6 md:py-4 bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal'>
              E-mail me
            </button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
