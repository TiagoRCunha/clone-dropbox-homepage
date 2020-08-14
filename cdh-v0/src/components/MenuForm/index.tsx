import React from 'react'

import { Container, DropboxLogo, Form, Navigation } from './styles'

const MenuForm: React.FC = () => {

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulario abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos termos de serviço
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
