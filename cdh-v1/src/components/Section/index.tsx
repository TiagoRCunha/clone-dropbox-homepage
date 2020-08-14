import React from 'react'

import { Container, Content, DropboxLogo, Header, HeaderWrapper } from './styles'

export interface SectionProps {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ variant, title, description }) => {

  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>

      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>{buttonVariant === 0 ? "Acessar" : "Interagir"}</button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>

      </Content>
    </Container>
  );
};

export default Section;
