import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

export const acomplishments = [
  { title: 'Cultural Secretary', org: 'Don Bosco Institute of Technology' },
  { title: 'Marketing Head', org: 'Don Bosco Institute of Technology' },
  { title: '98/100 Marks', org: 'Robocon 2020' },
  { title: 'National Level', org: 'Drama Club ' },
]

const Acomplishments = () => (
  <Section id='acomplishments'>
    <SectionTitle>
      Acomplishments
    </SectionTitle>
    <Boxes>
      {
        acomplishments.map((card, index) => (
          <Box key={index}>
            <BoxNum>
              {
                card.title
              }
            </BoxNum>
            <BoxText >
              {card.org}
            </BoxText>

          </Box>
        ))
      }
    </Boxes>
  </Section>
)

export default Acomplishments;
