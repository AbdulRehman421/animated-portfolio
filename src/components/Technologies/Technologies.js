import React from "react";
import { DiCss3, DiReact, DiJava, DiPython } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I am working in a Web Development from more then three months.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='5rem' />
        <ListContainer>
          <ListTitle>
            React
          </ListTitle>
          <ListParagraph >
            Experience with <br />
            React Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJavascript size='5rem' />
        <ListContainer>
          <ListTitle>
            JavaScript
          </ListTitle>
          <ListParagraph >
            Experience with <br />
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiFillHtml5 size='5rem' />
        <ListContainer>
          <ListTitle>
            HTML
          </ListTitle>
          <ListParagraph >
            Experience with <br />
            HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCss3 size='5rem' />
        <ListContainer>
          <ListTitle>
            CSS
          </ListTitle>
          <ListParagraph >
            Experience with <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        < SiTailwindcss size='5rem' />
        <ListContainer>
          <ListTitle>
            Tailwind
          </ListTitle>
          <ListParagraph >
            Experienced with <br />
            Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        < FaGitAlt size='5rem' />
        <ListContainer>
          <ListTitle>
            Git
          </ListTitle>
          <ListParagraph >
            Experienced with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size='5rem' />
        <ListContainer>
          <ListTitle>
            Java
          </ListTitle>
          <ListParagraph >
            Beginner with <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        < DiPython size='5rem' />
        <ListContainer>
          <ListTitle>
            Python
          </ListTitle>
          <ListParagraph >
            Beginner with <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
  </Section>
);

export default Technologies;
