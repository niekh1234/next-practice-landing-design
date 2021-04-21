import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  children?: ReactNode;
  delay?: number;
  title: String;
  description: String;
  path: string;
};

const Card = (props: Props) => {
  return (
    <Fade fraction={1} delay={props.delay || 0} triggerOnce>
      <div className='grid h-auto grid-flow-col gap-4 sm:gap-8 md:grid-flow-row'>
        <div className='flex justify-center w-full'>
          <div className='w-16 h-16 p-5 rounded-lg sm:w-20 sm:h-20 bg-teal'>
            <svg
              className='w-auto h-auto text-current text-teal-lightest'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={props.path}
              ></path>
            </svg>
          </div>
        </div>
        <div className='flex flex-col w-full md:px-4 md:items-center'>
          <h3 className='text-2xl font-bold text-black md:text-center '>{props.title}</h3>
          <p className='mt-2 text-lg text-teal-darker sm:mt-4 md:text-center max-w-32'>
            {props.description}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
