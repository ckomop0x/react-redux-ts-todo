import { FC, ReactNode } from 'react';

import { LayoutWrapper, MainWrapper } from './styles';

import Footer from 'components/UI/Footer';

interface LayoutProps {
  children?: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <MainWrapper>{children}</MainWrapper>
    <Footer link="https://github.com/ckomop0x" title="Pavel Klochkov" imgSrc="/avatar.jpeg" />
  </LayoutWrapper>
);

export default Layout;
