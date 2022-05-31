import styled from 'styled-components';

export const ContainerStyled = styled.div`
  && {
    background-color: #eeeeee;
    color: white;
    font-family: 'Signika',sans-serif;
    font-size: 15px;
  }
`;

export const CardtStyled = styled.div`    
  && {
    padding: 3rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    box-shadow: 12px 20px 13px 0px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    max-width: 500px;
    margin: 0 auto;
    @media(min-width: 600px) {
      padding: 3rem 6rem;
    }
  }
`;

export const CardPlantStyled = styled.div`    
  && {
    padding: 3rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    box-shadow: 12px 20px 13px 0px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    width: 300px;
    margin: 0 auto;
    cursor: pointer;
    @media(min-width: 600px) {
      width: 700px;
    }
  }
`;

export const InputStyled = styled.input`
  && {
    border: 2px solid #dddfe2;
    color: #1d2129;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 18px;
    outline: none;
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
    &.error {
        border: 2px solid red;
    }
    &:hover {
      box-shadow: 2px 4px 8px 0px #4b4b8b3b, 0 8px 16px rgb(0 0 0 / 10%);
    }
  }
`;

export const ButtonStyled = styled.button`
  && {
    border: none;
    background-color: #f7b643;
    border-radius: 6px;
    padding: 10px 40px;
    color: black;
    font-family: 'Signika',sans-serif;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: #a21503;
      border-color: #a21503;
      color: white;
    }
  }
`;

export const ErrorStyled = styled.div`
  && {
    color: red;
    position: relative;
    top: -1rem;
    font-weight: 700;
  }
`;

export const TitleStyled = styled.div`
  && {
    font-size: 22px;
    font-weight: 700;
    font-family: "Helvetica";
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
    color: black;
  }
`;

export const CardContainerStyled = styled.div`
  && {
    padding: 1rem;
    @media(min-width: 600px) {
      padding: 6rem;
    }
    background-color: #eeeeee;
  }
`;

export const PlanCardStyled = styled.div`
  && {
    display: flex;
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 2rem;
    min-height: 9rem;
    color: black;
    background: white;
    box-shadow: 2px 4px 8px 0px #4b4b8b3b, 0 8px 16px rgb(0 0 0 / 10%);
    @media(max-width: 599px) {
      flex-direction: column;
    }    
    &.selected {
      color: white;
      background: black;
    }
    &:hover {
      color: white;
      background: black;
    }
  }
`;

export const PlanCardItemStyled = styled.div`
  && {
    font-weight: 800;
    letter-spacing: 0.5px;
    @media(max-width: 599px) {
      font-size: 1.25rem;
    }
  }
`;

export const PlanCardListStyled = styled.div`
  && {
    text-align: center;
    @media(max-width: 599px) {
      margin-top: 0.5rem;
    }
    .item {
      color: gray;
      line-height: 2rem;
    }
  }
`;


export const PlanCardPricetStyled = styled.div`
  && {
    display: flex;
    justify-content: flex-start;
    font-weight: 800;
    align-items: unset;
    @media(max-width: 599px) {
      margin-top: 2rem;
    }
    .principal {
      font-size: 2.25rem;
      line-height: 2rem;
      letter-spacing: 1px;
      margin-left: 0.25rem;
    }
  }
`;

export const PlanCardInfotStyled = styled.div`
  && {
    color: black;
    margin-bottom: 1rem;
    .type1 {
      FONT-WEIGHT: 900;
      PADDING: 0.25rem;
      COLOR: #f7b643;
    }
    .type2 {
      FONT-WEIGHT: 900;
      PADDING: 0.25rem;
      COLOR: RED;
    }
  }
`;

