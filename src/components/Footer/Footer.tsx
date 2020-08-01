import React, { FC } from 'react';
import {
  Container,
  Logo,
  SectionsWrapper,
  Heading,
  Section,
  Link,
  SocialMedia,
  Icon,
} from './style';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconPinterest from '../../assets/images/icon-pinterest.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

export const Footer: FC = () => {
  return (
    <Container>
      <Logo href="#">Shortly</Logo>
      <SectionsWrapper>
        <Section>
          <Heading>Features</Heading>
          <ul>
            <li>
              <Link href="#">Link Shortening</Link>
            </li>
            <li>
              <Link href="#">Branded Links</Link>
            </li>
            <li>
              <Link href="#">Analytics</Link>
            </li>
          </ul>
        </Section>
        <Section>
          <Heading> Resources</Heading>
          <ul>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Developers</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </Section>
        <Section>
          <Heading>Company</Heading>
          <ul>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </Section>
        <Section>
          <SocialMedia>
            <Icon>
              <a href="#">
                <img src={iconFacebook} alt="Facebook" />
              </a>
            </Icon>
            <Icon>
              <a href="#">
                <img src={iconTwitter} alt="Twitter" />
              </a>
            </Icon>
            <Icon>
              <a href="#">
                <img src={iconPinterest} alt="Pinterest" />
              </a>
            </Icon>
            <Icon>
              <a href="#">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </Icon>
          </SocialMedia>
        </Section>
      </SectionsWrapper>
    </Container>
  );
};
