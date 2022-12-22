import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Abdul Rehman <br />
        Frontend Developer
      </SectionTitle>
      <SectionText>
        Fluency in React, JavaScript, HTML, CSS, Java, Python, SQL.
      </SectionText>
      <a href='/images/Abdul_Rehman_Frontend.pdf' download><Button>
        Download Resume
      </Button></a>
    </LeftSection>
  </Section >
);

export default Hero;