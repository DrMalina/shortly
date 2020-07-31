import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Container = styled.div`
  position: relative;
  margin-top: 9rem;
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  z-index: 1;
`;

interface CardIconProps {
  src: string;
}

export const CardIcon = styled.div<CardIconProps>`
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 50%;
  position: absolute;
  top: -4.4rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.colors.background};
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardContent = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const CardHeading = styled.h3`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.gray300};
  font-size: 2.2rem;
`;

export const CardParagraph = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: ${theme.colors.gray200};
  line-height: 2.6rem;
`;