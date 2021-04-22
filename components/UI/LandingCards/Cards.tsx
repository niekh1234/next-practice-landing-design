import Card from './Card';

const Cards = () => {
  return (
    <div className='grid w-full h-full max-w-6xl grid-cols-1 grid-rows-3 gap-4 px-4 mt-16 md:mt-32 md:grid-cols-3 md:grid-rows-1 gap-y-16'>
      <Card
        title={'Performance'}
        description={'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec'}
        path='M13 10V3L4 14h7v7l9-11h-7z'
      ></Card>
      <Card
        delay={200}
        title={'Cost'}
        description={'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec'}
        path='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      ></Card>
      <Card
        delay={400}
        title={'Scalability'}
        description={'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec'}
        path='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
      ></Card>
    </div>
  );
};

export default Cards;
