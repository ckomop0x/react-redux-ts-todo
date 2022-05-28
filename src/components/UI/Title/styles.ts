import styled from 'styled-components';

export const TitleWrapper = styled.h1`
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  span {
    color: ${({ theme }) => theme.colors.primaryAccent};
    text-decoration: none;
  }

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`;
