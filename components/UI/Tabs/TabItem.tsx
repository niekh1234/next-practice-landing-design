interface Tab {
  listTitle: string;
  title?: string;
  description?: string;
  svg?: JSX.Element;
}

type Props = {
  tab: Tab;
};

const TabItem = (props: Props) => {
  return (
    <div className='flex flex-col items-end w-full h-full col-span-1 row-span-3 p-4 mb-auto rounded-2xl md:p-0'>
      <div className='flex flex-col h-full max-w-3xl pr-8'>
        <h4 className='text-3xl font-bold text-center xs:text-4xl text-teal-darkest md:text-5xl md:text-left'>
          {props.tab.title}
        </h4>
        <p className='w-full mt-4 text-xl text-center sm:mt-8 text-teal-dark sm:text-2xl md:text-left'>
          {props.tab.description}
        </p>
        <div className='w-full mt-8'>
          <div className='max-w-xs mx-auto mb-4 sm:max-w-sm lg:max-w-lg md:mx-0'>
            {props.tab.svg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
