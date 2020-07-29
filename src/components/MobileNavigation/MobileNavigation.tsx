import React, { FC } from 'react';
import { MobileContainer, List, ListItem, Link, Divider } from './style';

interface MobileNavigationProps {
  hidden?: Boolean;
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ hidden = true }) => {
  return (
    <MobileContainer isHidden={hidden}>
      <List id="menuItems">
        <ListItem first>
          <Link href="#">Features</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Pricing</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Resources</Link>
        </ListItem>
        <ListItem aria-hidden="true">
          <Divider />
        </ListItem>
        <ListItem>
          <Link href="#">Login</Link>
        </ListItem>
        <ListItem>
          <Link href="#" primary>
            Sign Up
          </Link>
        </ListItem>
      </List>
    </MobileContainer>
  );
};
