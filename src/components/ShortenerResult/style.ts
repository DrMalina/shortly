import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  text-align: left;

  @media (min-width: 775px) {
    margin-top: 2rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const OriginalLink = styled.a`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray300};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: 1.6rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;

  @media (min-width: 775px) {
    font-size: 2rem;
    line-height: 3rem;
    margin-right: 2.6rem;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ShortenLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  margin-right: 2rem;

  @media (min-width: 775px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

interface ButtonProps {
  copied: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${(props) =>
    props.copied ? props.theme.colors.background : props.theme.colors.primary};
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  padding: 0.8rem 3rem;
  cursor: pointer;
  transition: ease-in-out 350ms background-color;

  &:hover {
    background-color: ${(props) =>
      props.copied ? props.theme.colors.background : props.theme.colors.primaryLight};
  }

  @media (min-width: 775px) {
    font-size: 1.5rem;
    padding: 1rem 3rem;
  }
`;
