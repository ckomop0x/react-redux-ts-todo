import { FC } from 'react';

import { FooterLogoContainer, FooterLogo, FooterWrapper } from './styles';

interface FooterProps {
  link: string;
  title: string;
  imgSrc: string;
}

const Footer: FC<FooterProps> = ({ link, title, imgSrc }) => (
  <FooterWrapper>
    Made by{' '}
    <FooterLogoContainer href={link} target="_blank" rel="noopener noreferrer">
      <FooterLogo src={imgSrc} alt={title} width={32} height={32} />
    </FooterLogoContainer>
  </FooterWrapper>
);

export default Footer;
