import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 8rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  position: relative;
  z-index: 1;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.gray300};
  letter-spacing: -0.7px;
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 975px) {
    font-size: 4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.colors.gray200};
  margin-top: 2rem;
  padding: 0 0.8rem;

  @media (min-width: 975px) {
    padding: 0;
    margin: 2rem auto;
    max-width: 54rem;
    font-size: 1.8rem;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1165px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 0.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 0;
  }

  @media (min-width: 1165px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 0.8rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      z-index: 0;
    }
  }
`;
