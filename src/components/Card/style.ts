import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 9rem;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  z-index: 1;
  max-width: 45rem;

  @media (min-width: 1165px) {
    text-align: left;

    &:nth-of-type(2) {
      margin-top: 13.4rem;
    }

    &:nth-of-type(3) {
      margin-top: 17.4rem;
    }

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

interface CardIconProps {
  path: string;
}

export const CardIcon = styled.div<CardIconProps>`
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 50%;
  position: absolute;
  top: -4.4rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${(props) => props.path});
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1165px) {
    left: 4rem;
    transform: none;
  }
`;

export const CardContent = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const CardHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 2.2rem;
`;

export const CardParagraph = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray200};
  line-height: 2.6rem;
`;
