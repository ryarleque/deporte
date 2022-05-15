import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { Facebook, Whatsapp } from "react-bootstrap-icons";

export const HomeContentStyled = styled.div`    
  && {
    background: black;
    color: white;
    font-family: 'Signika',sans-serif;
    font-size: 15px;
    height: 100vh;
  }
`;

export const HeadertStyled = styled.div`    
  && {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const LeftHeadertStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
  }
`;

export const RighttHeadertStyled = styled.div`    
  && {
    display: flex;
    font-family: 'Signika',sans-serif;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.5px;
    font-size: 15px;
  }
`;

export const LogoHeadertStyled = styled.img`    
  && {
    width: 5rem;
  }
`;

export const TitleHeaderStyled = styled.div`    
  && {
    font-size: 23px;
    font-weight: 900;
    margin-left: 1rem;
    line-height: 1.5rem;
    font-family: sans-serif;
    width: 10rem;
  }
`;

export const ItemHeaderStyled = styled.div`    
  && {
    cursor: pointer;
    transition: all .2s linear;
    padding: 0 1em;
    font-weight: 600;
    color: #f9f4e1;
    &: hover {
        color: #f7b643;
    }
  }
`;

export const ItemLastHeaderStyled = styled.div`    
  && {
    margin-right: 2rem;
    cursor: pointer;
    transition: all .2s linear;
    padding: 0 1em;
    font-weight: 600;
    color: #f9f4e1;
    &: hover {
        color: #f7b643;
    }
  }
`;

export const ButtonHeaderStyled = styled.div`    
  && {
    border-color: #f7b643;
    background-color: #f7b643;
    border-radius: 2px;
    padding: 10px 40px;
    color: black;
    font-family: 'Signika', sans-serif;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #a21503;
        border-color: #a21503;
        color: white;
    }
  }
`; 

export const Button2HeaderStyled = styled.div`    
  && {
    background-color: #a21503;
    border-color: #a21503;
    color: white;    
    border-radius: 2px;
    padding: 10px 40px;
    font-family: 'Signika', sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin-left:1rem;
    &:hover {
        color: black;
        border-color: #f7b643;
        background-color: #f7b643;
    }
  }
`; 

export const ContentCarouselStyled = styled.div`    
  && {
    position: relative;
  }
`; 

export const CarouselStyled = styled(Carousel)`    
  && {
    
  }
`; 

export const TitleCarouselStyled = styled.div`    
  && {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -7.25rem;
    @media(min-width: 600px) {
        top: -7rem;
    }
  }
`;

export const ImageCarouselStyled = styled.img`    
  && {
    height: 25rem;
  }
`;

export const PromotionContentColorStyled = styled.div`    
  && {
    display: flex;
    margin-top: 2rem;
    font-size: 30px;
    font-weight: 900;
    margin-left: 1rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const PromotionColorStyled = styled.div`    
  && {
    color: #f7b643;
  }
`;

export const FooterContentStyled = styled.div`    
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #7a7a7a;
    padding: 2rem 0;
    line-height: 2rem;
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