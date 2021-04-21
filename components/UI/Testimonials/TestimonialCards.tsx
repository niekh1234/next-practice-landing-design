import { Fade } from 'react-awesome-reveal';

const TestimonialCards = () => {
  return (
    <div className='flex flex-col items-center w-full px-4 mt-16 space-y-16 md:px-32 md:mt-24'>
      <Fade fraction={0.3} triggerOnce className='flex flex-col items-start w-full'>
        <div className='flex flex-col items-center max-w-5xl p-8 space-y-8 md:space-x-8 md:flex-row bg-pink-lightest'>
          <div className='p-4'>
            <div className='flex items-center justify-center w-32 h-32 rounded-full md:w-48 md:h-48 bg-pink'>
              <div className='w-12 h-12 rounded-full md:w-16 md:h-16 bg-pink-light'></div>
            </div>
          </div>
          <div>
            <blockquote className='text-lg font-semibold leading-loose text-pink-darker xs:text-xl'>
              "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
              iaculis, ipsum."
            </blockquote>
            <figcaption className='mt-4 text-lg sm:text-xl'>
              <div className=' text-pink-darker'>- Aenean posuere</div>
              <div className=' text-pink-dark'>Non euismod, Vitae</div>
            </figcaption>
          </div>
        </div>
      </Fade>
      <Fade fraction={0.3} triggerOnce className='flex flex-col items-end w-full'>
        <div className='flex flex-col items-center max-w-5xl p-8 space-y-8 md:space-x-8 md:flex-row bg-teal-lightest'>
          <div className='p-4'>
            <div className='flex items-center justify-center w-32 h-32 rounded-full md:w-48 md:h-48 bg-teal'>
              <div className='w-12 h-12 rounded-full md:w-16 md:h-16 bg-teal-light'></div>
            </div>
          </div>
          <div>
            <blockquote className='text-lg font-semibold leading-loose text-teal-darker xs:text-xl'>
              "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.
              Donec posuere vulputate arcu. Phasellus accumsan cursus velit."
            </blockquote>
            <figcaption className='mt-4 text-lg sm:text-xl'>
              <div className='text-teal-darker'>- Pellentesque Dapibus</div>
              <div className='text-teal-dark'>Elementum ac, Condimentum</div>
            </figcaption>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TestimonialCards;
