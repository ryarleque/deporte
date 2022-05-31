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
  }
`;

export const CardUserNameStyled = styled.div`    
  && {
    position: absolute;
    top: 16.5rem;
    color: black;
    font-weight: 800;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const CardDetailsStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 19.7rem;
    left: 0;
    right: 0;
    color: black;
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