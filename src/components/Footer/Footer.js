import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper >
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href='tel:8369017007'>
            8369017007
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Mail
          </LinkTitle>
          <LinkItem href='mailto:rkofficial0910@gmail.com'>
            rkofficial0910@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Mumbai
          </LinkTitle>
          <LinkItem href='8369017007'>
            Location
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Felt Amazing... Want to connect ?
          </Slogan>
          <SocialContainer>
            <SocialIcons href="https://www.linkedin.com/in/khanabdulrehman/">
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href="https://github.com/AbdulRehman421">
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size='3rem' />
            </SocialIcons>
          </SocialContainer>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
