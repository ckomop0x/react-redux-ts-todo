import styled, { css } from 'styled-components';

export const TaskWrapper = styled.div<{
  editMode: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  margin: 0 0 8px;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 90%;
  box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.primary};

  ${({ editMode }) =>
    editMode &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
      box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.primaryAccent};
    `}

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.primaryAccent};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  input {
    font-size: 1.5rem;
    margin: 0 auto 0 8px;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const TaskTitle = styled.h2<{
  isCompleted?: boolean;
}>`
  margin: 0 auto 0 8px;
  text-decoration: none;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;
