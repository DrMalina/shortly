import React, { FC } from 'react';
import { SocialMedia } from '../SocialMedia';
import { Wrapper, Container, Logo, SectionsWrapper, Heading, Section, Link } from './style';

export const Footer: FC = () => {
  return (
    <Wrapper>
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
            <SocialMedia />
          </Section>
        </SectionsWrapper>
      </Container>
    </Wrapper>
  );
};
