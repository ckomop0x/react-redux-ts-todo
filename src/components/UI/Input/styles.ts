import styled from 'styled-components';

export const InputWrapper = styled.input`
  display: inline-block;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
