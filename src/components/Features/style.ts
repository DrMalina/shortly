import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Container = styled.section`
  background-color: ${theme.colors.gray};
  text-align: center;
  margin-top: -8.2rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  position: relative;
  z-index: 1;
`;

export const Heading = styled.h2`
  margin-top: 10rem;
  color: ${theme.colors.gray300};
  letter-spacing: -0.7px;
  font-size: 2.8rem;
  font-weight: ${theme.fontWeight.bold};
`;

export const Paragraph = styled.p`
  font-size: ${theme.fontSize.xs};
  line-height: 2.8rem;
  color: ${theme.colors.gray200};
  margin-top: 2rem;
  padding: 0 0.8rem;
`;

export const CardsWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 0.8rem;
    background-color: ${theme.colors.primary};
    z-index: 0;
  }
`;
