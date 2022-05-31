import styled from "styled-components";

export const HeadertStyled = styled.div`    
  && {
    background: black;
   
  }
`;

export const HeadertInnerContentStyled = styled.div`    
  && {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftHeadertStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    cursor: pointer;
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
    width: 7rem;
    @media(min-width: 600px) {
      width: 10rem;
    }
  }
`;


export const WebHeaderStyled = styled.div`    
  && {
    display: none;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 900px) {
      display: flex;
    }
  }
`;

export const MobileHeaderStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 900px) {
      display: none;
    }
    .list {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;


export const MobileContentHeaderStyled = styled.div`    
  && {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
    padding: 2rem;
    background: #808080f5;
    z-index: 100;
    text-align: center;
    .yellow-button {
      margin-bottom: 1rem;
    }
  }
`;


export const Button2HeaderMobileStyled = styled.div`    
  && {
    background-color: #a21503;
    border-color: #a21503;
    color: white;    
    border-radius: 2px;
    padding: 10px 40px;
    font-family: 'Signika', sans-serif;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        color: black;
        border-color: #f7b643;
        background-color: #f7b643;
    }
  }
`; 