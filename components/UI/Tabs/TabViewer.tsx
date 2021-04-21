import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import TabOne from '../../SVG/TabOneSvg';
import TabTwo from '../../SVG/TabTwoSvg';
import TabItem from './TabItem';
import TabList from './TabList';

interface ListItem {
  listTitle: string;
  title?: string;
  description?: string;
  svg?: JSX.Element;
}

const TabViewer = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const listItems: ListItem[] = [
    {
      listTitle: 'Tab 1',
      title: 'Etiam rhoncus. Maecenas tempus',
      description:
        'Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
      svg: <TabOne></TabOne>,
    },
    {
      listTitle: 'Tab 2',
      title: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit',
      description:
        'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.',
      svg: <TabTwo></TabTwo>,
    },
    {
      listTitle: 'Tab 3',
      title: 'Etiam rhoncus. Maecenas tempus',
      description:
        'Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
      svg: <TabOne></TabOne>,
    },
    {
      listTitle: 'Tab 4',
      title: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit',
      description:
        'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.',
      svg: <TabTwo></TabTwo>,
    },
  ];

  const changeTab = (tab: string) => {
    setCurrentTabIndex(() => listItems.findIndex((item) => item.listTitle === tab));
  };

  return (
    <div className='grid w-full h-full grid-flow-row grid-cols-1 gap-8 py-8 mt-16 md:mt-32 auto-rows-min md:max-w-6xl max-w-screen md:grid-cols-4 md:grid-rows-1 bg-teal-lightest'>
      <Fade fraction={0.5} delay={0} triggerOnce>
        <TabList
          tab={listItems[currentTabIndex].listTitle}
          onChangeTab={changeTab}
          listItems={listItems}
        ></TabList>
      </Fade>
      <Fade fraction={0.5} delay={300} triggerOnce className='md:col-span-3'>
        <TabItem tab={listItems[currentTabIndex]}></TabItem>
      </Fade>
    </div>
  );
};

export default TabViewer;
