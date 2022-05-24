import styled from 'styled-components';

export const AsistenciaContentStyled = styled.div`    
  && {
    display: flex;
  }
`;

export const AsistenciaContainerStyled = styled.div`    
  && {
    display: flex;
    flex-flow: column;
    padding: 3rem;
    width: 100%;
  }
`;

export const AsistenciaTitleStyled = styled.div`
  && {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`;

export const CardContainerStyled = styled.div`
  && {
    margin-bottom: 2rem;
    max-width: 500px;
  }
`;

export const CardStyled = styled.div`
  && {
    height: 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
  }
`;

export const CardItemStyled = styled.div`
  && {
    padding: 2rem 0rem;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 4px 7px 7px 0px rgb(0 0 0 / 36%), 0 8px 16px rgb(0 0 0 / 10%);
    svg {
      font-size: 1.25rem;
    }
  }
`;
