import { Facebook, Whatsapp } from "react-bootstrap-icons";
import styled from "styled-components";

export const FooterContentStyled = styled.div`    
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #7a7a7a;
    padding: 2rem 0;
    line-height: 2rem;
    background: black;
    color: white;
  }
`;

export const SocialContentStyled = styled.div`    
  && {
    display: flex;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const FacebbokContentStyled = styled(Facebook)`
  && {
    margin-right: 3rem;
  }
`;

export const WhatsappContentStyled = styled(Whatsapp)`
  && {
    font-size: 4rem;
    padding: 1rem;
    color: white;
  }
`;

export const ContentWhatsappStyled = styled.div`    
  && {
    background: green;
    border-radius: 4rem;
    width: 4rem;
    cursor: pointer;
    position: fixed;
    right: 2rem;
    bottom: 5rem;
    z-index: 10000;
  }
`;

export const ContentStyled = styled.div`    
  && {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
`;

export const TitleStyled = styled.div`    
  && {
    color: #f7b643;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;