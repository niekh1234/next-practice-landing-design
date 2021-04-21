import { FC } from 'react';
import Footer from './Footer';
import NavigationBar from './Navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
