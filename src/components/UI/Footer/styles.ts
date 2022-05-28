import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  flex: 1;
  height: 64px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const FooterLogoContainer = styled.a`
  height: 32px;
  margin-left: 0.5rem;
`;

export const FooterLogo = styled.img<{
  width: string | number;
  height: string | number;
}>`
  border-radius: 50%;
  width: ${({ width }) => width ?? 32}px;
  height: ${({ height }) => height ?? 32}px;
`;
