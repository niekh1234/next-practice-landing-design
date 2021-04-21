interface ListItem {
  listTitle: string;
  title?: string;
  description?: string;
}

type Props = {
  tab: string;
  onChangeTab: Function;
  listItems: ListItem[];
};

const TabList = (props: Props) => {
  const changeTab = (tab: string) => {
    props.onChangeTab(tab);
  };

  const listTiles = props.listItems.map((item, index) => (
    <div key={item.listTitle} className='flex flex-col'>
      <button
        onClick={() => changeTab(item.listTitle)}
        className={`mx-auto py-2 w-32 flex justify-center items-center text-xl md:text-2xl font-black text-teal-darkest transition-colors duration-200 focus:outline-none hover:text-teal rounded-full ${
          item.listTitle === props.tab ? 'text-teal-dark bg-teal-lighter' : 'text-white'
        }`}
      >
        <p>{item.listTitle}</p>
      </button>
      {index !== props.listItems.length - 1 && (
        <div className='w-0.5 my-2 h-full m-auto bg-teal hidden md:block'></div>
      )}
    </div>
  ));
  return (
    <div className='w-screen h-full overflow-x-scroll md:w-full md:rounded-lg md:overflow-x-auto'>
      <div className='grid w-full h-full grid-flow-col gap-4 md:py-4 md:grid-flow-row'>
        {listTiles}
      </div>
    </div>
  );
};

export default TabList;
