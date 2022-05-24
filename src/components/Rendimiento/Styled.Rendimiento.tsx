import styled from 'styled-components';

export const RendimientoContentStyled = styled.div`    
  && {
    display: flex;
  }
`;

export const RendimientoInnterContentStyled = styled.div`    
  && {
    display: flex;
    flex-flow: column;
    padding: 3rem;
    width: 100%;
  }
`;

export const TitleStyled = styled.div`    
  && {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`;

export const CardStyled = styled.div`    
  && {
    border-radius: 6px;
    margin-bottom: 3rem;
    max-width: 350px;
    box-shadow: 5px 9px 11px 0px rgb(0 0 0 / 36%), 0 8px 16px rgb(0 0 0 / 10%);
  }
`;

export const CardHeaderStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f7b643;
    padding: 1rem;
    color: black;
    border: 1px solid #f7b643;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export const CardHeaderTitleStyled = styled.div`    
  && {
    font-weight: 700;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export const CardBodyTitleStyled = styled.div`    
  && {
    padding: 1rem;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid black;
    border-top-color: transparent;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const CardBodySectionTitleStyled = styled.div`    
  && {
    text-align: center;
    color: #d6c6c6;
  }
`;

export const CardBodySectionItemTitleStyled = styled.div`    
&& {
  font-size: 2rem;
    color: white;
    font-weight: 800;
}
`;
  