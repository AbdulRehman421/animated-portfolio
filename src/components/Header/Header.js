import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="https://abdul-rehman-react-portfolio.netlify.app/">
        <a style={{ display: 'flex', alignItems: "center", color: "white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" />
          <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>
            Skills
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#acomplishments">
          <NavLink>
            Acomplishments          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/khanabdulrehman/">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://github.com/AbdulRehman421">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
