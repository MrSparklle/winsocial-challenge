import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as IconLogo } from "../../assets/icon-logo.svg";
import { Container } from "components";

const Footer = () => {
  return (
    <>
      <Container className={styles.footerContainer}>
        <IconLogo />
        <div>
          {/* <p> tags needs to be replaced by a proper link component */}
          <span>VENDA UMA CASA</span>
          <p>Solicitar uma oferta</p>
          <p>Preços</p>
          <p>Comentários</p>
          <p>Histórias</p>
          <span>VENDA UMA CASA</span>
          <p>Solicitar uma oferta</p>
          <p>Preços</p>
          <p>Comentários</p>
          <p>Histórias</p>
        </div>
        <div>
          <span>COMPRE UMA CASA</span>
          <p>Compres</p>
          <p>Financie</p>
          <span>TERMOS E PRIVACIDADE</span>
          <p>Confiança Segurança</p>
          <p>Termos de Serviço</p>
          <p>Política de Privacidade</p>
        </div>
        <div>
          <span>SOBRE</span>
          <p>Empresa</p>
          <p>Como funciona</p>
          <p>Contacto</p>
          <p>Investidores </p>
          <span>RECURSOS</span>
          <p>Blog</p>
          <p>Guias</p>
          <p>FAQ</p>
          <p>Centro de Ajuda</p>
        </div>
      </Container>
      <footer className={styles.footerCopyright}>
        <p>©2022 WinRent. Todos os direitos reservados.</p>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </footer>
    </>
  );
};

export default Footer;
