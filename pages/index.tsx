import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import Head from 'next/head';
import LandingSVG from '../components/SVG/LandingSVG';
import Cards from '../components/UI/LandingCards/Cards';
import TabViewer from '../components/UI/Tabs/TabViewer';
import TestimonialCards from '../components/UI/Testimonials/TestimonialCards';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='flex items-center justify-center w-screen h-screen p-4 bg-white xs:p-6 sm:p-8'>
          <div className='grid w-full max-w-6xl grid-flow-row gap-y-4 sm:gap-y-8 md:grid-rows-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center mt-0 md:mt-8'>
              <h1 className='text-2xl font-black leading-tight xs:text-3xl sm:text-4xl md:text-7xl'>
                Lorem ipsum dolor sit amet, consectetuer
              </h1>
              <h2 className='mt-4 text-base sm:mt-6 xs:text-xl md:text-2xl'>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </h2>
              <div className='inline-flex items-center mt-12 space-x-8'>
                <button className='px-4 py-3 font-bold text-white transition-colors duration-500 rounded-full shadow-lg xs:text-lg xs:px-6 xs:py-3 md:px-8 md:py-4 bg-teal-dark hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal-light'>
                  Get in touch
                </button>
                <button className='text-base font-bold text-black transition-colors duration-200 border-b-2 border-transparent xs:text-lg focus:outline-none hover:border-pink'>
                  How it works
                </button>
              </div>
            </div>
            <div className='row-start-1 px-8 md:row-start-auto xs:p-0'>
              <LandingSVG></LandingSVG>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center w-screen h-auto py-24 md:py-32 bg-teal-lightest'>
          <div className='w-full max-w-6xl px-4 text-center'>
            <p className='text-lg font-semibold uppercase text-teal'>Tellus interdum</p>
            <h2 className='mt-4 text-3xl font-black text-black xs:text-4xl md:text-6xl'>
              Phasellus velit accumsan cursus.
            </h2>
            <h3 className='mt-6 text-xl text-teal-darker'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae?
            </h3>
          </div>
          <Cards></Cards>
        </section>
        <section className='flex flex-col items-center w-screen min-h-screen pt-16 bg-white md:pt-32'>
          <Fade fraction={0.3} delay={0} triggerOnce className='w-full max-w-6xl px-4 text-center'>
            <p className='text-lg font-semibold uppercase text-pink-dark'>Aliquam lobortis</p>
            <h2 className='mt-4 text-3xl font-black text-black xs:text-4xl md:text-6xl'>
              Phasellus velit accumsan cursus.
            </h2>
            <h3 className='mt-6 text-xl sm:text-2xl text-grey-darker'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae. am quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem?
            </h3>
          </Fade>
          <TabViewer></TabViewer>
        </section>
        <section className='flex flex-col items-center w-screen min-h-screen py-16 bg-white md:py-32'>
          <Fade fraction={0.3} delay={0} triggerOnce className='w-full max-w-6xl px-4 text-center'>
            <p className='text-lg font-semibold uppercase text-pink-dark'>Testimonials</p>
            <h2 className='mt-4 text-3xl font-black text-black xs:text-4xl md:text-6xl'>
              Pellentesque commodo eros a enim.
            </h2>
            <h3 className='mt-6 text-xl sm:text-2xl text-grey-darker'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae.
            </h3>
          </Fade>
          <TestimonialCards></TestimonialCards>
        </section>
        <section className='flex flex-col items-center px-4 py-16 md:py-32 bg-teal-dark'>
          <div className='grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-rows-1 grid-auto-rows md:space-x-8 md:grid-auto-cols md:grid-flow-col'>
            <div className='md:col-span-2'>
              <h2 className='text-4xl font-bold text-white sm:text-5xl'>
                Praesent vestibulum dapibus nibh.
              </h2>
              <h2 className='mt-4 text-4xl font-bold sm:text-5xl text-teal-darkest'>
                Etiam iaculis nunc ac metus.
              </h2>
            </div>
            <div className='flex items-center md:justify-end'>
              <button className='w-full px-10 py-5 text-lg font-bold transition-colors duration-500 bg-white rounded-full shadow-lg sm:w-auto text-teal-dark hover:bg-teal-lighter hover:text-teal-darker focus:outline-none focus:ring-2 focus:ring-teal-light'>
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
