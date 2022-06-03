import styled from 'styled-components';

export const DetalleRendimientoContentStyled = styled.div`    
  && {
    display: flex;
  }
`;


export const DetalleRendimientoInnerContentStyled = styled.div`    
  && {
    display: flex;
    flex-flow: column;
    padding: 2rem;
    width: 100%;
    overflow: auto;
    height: 97vh;
    @media(min-width: 600px) {
      padding: 3rem;
    }
  }
`;


export const CardContentStyled = styled.div`    
  && {
    background: black;
    color: white;
    position: relative;
    width: 300px;
    margin: 0 auto;
    border-radius: 6px;
    margin-bottom: 2rem;
  }
`;


export const CardTitleStyled = styled.div`    
  && {
    padding: 2rem 0 1rem 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const CardImageStyled = styled.img`    
  && {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 31rem;
  }
`;

export const CardUserNameStyled = styled.div`    
  && {
    position: absolute;
    top: 22rem;
    color: #46390c;
    font-weight: 800;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.15rem;
  }
`;

export const CardDetailsStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 24.6rem;
    left: 0;
    right: 0;
    color: #46390c;
    font-family: 'Signika';
  }
`;

export const CardDetailLeftStyled = styled.div`    
  && {
    width: 7rem;
    font-size: 1.15rem;
    line-height: 1.8rem;
  }
`;

export const CardDetailRightStyled = styled.div`    
  && {
    font-size: 1.15rem;
    line-height: 1.8rem;
  }
`;

export const CardNumberDetailStyled = styled.div`    
  && {
    font-weight: 800;
  }
`;

export const CardItemDetailStyled = styled.span`    
  && {
    font-weight: 400;
  }
`;

export const UserInfoStyled = styled.img`    
  && {
    width: 7rem;
    color: transparent;
    background: transparent;
    top: 11.5rem;
    position: absolute;
    left: 8.5rem;
  }
`;


export const UserPromedioStyled = styled.div`    
  && {
    color: #46390c;
    font-size: 2.5rem;
    position: absolute;
    top: 10rem;
    left: 3.8rem;
    font-weight: 900;
    border-bottom: 3px solid #46390c;
    letter-spacing: -2px;
  }
`;
;


export const EscudoStyled = styled.img`    
  && {
    width: 4rem;
    border-radius: 0.5rem;
    top: 15rem;
    position: absolute;
    left: 3rem;
  }
`;