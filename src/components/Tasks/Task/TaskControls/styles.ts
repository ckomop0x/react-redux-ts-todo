import styled from 'styled-components';

export const TaskControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 4px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    flex-direction: row;

    button {
      margin-bottom: 0;
    }
  }
`;
