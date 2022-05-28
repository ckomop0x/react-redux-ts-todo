import { FC, ReactNode } from 'react';

import { TitleWrapper } from './styles';

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;
