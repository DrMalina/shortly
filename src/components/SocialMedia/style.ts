import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.li`
  &:not(:last-child) {
    margin-right: 2.4rem;
  }

  path {
    transition: ease-in-out 300ms fill;
  }

  &:hover {
    path {
      fill: ${theme.colors.primary};
    }
  }
`;
