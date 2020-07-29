import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

interface MobileContainerProps {
  isHidden?: Boolean;
}

export const MobileContainer = styled.div<MobileContainerProps>`
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
  position: absolute;
  left: 0;
  right: 0;
  top: 9rem;
  z-index: 1;
  padding: 0 2.2rem;
`;

interface LinkProps {
  primary?: Boolean;
}

export const Link = styled.a<LinkProps>`
  display: block;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  text-decoration: none;
  padding: 1rem 0;

  ${(props) =>
    props.primary &&
    `border-radius: 3rem;
    padding: 1.6rem 0;
    background-color: ${theme.colors.primary};
  `}
`;

export const List = styled.ul<MobileContainerProps>`
  background-color: ${theme.colors.background};
  text-align: center;
  border-radius: 1rem;
  padding: 3.4rem 2.4rem;
`;

interface ListItemProps {
  first?: Boolean;
}

export const ListItem = styled.li<ListItemProps>`
  margin-top: ${(props) => (props.first ? '0' : '1.6rem')};
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  opacity: 0.25;
  background-color: ${theme.colors.gray200};
`;
