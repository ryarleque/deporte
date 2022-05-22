import styled from 'styled-components';

export const ContainerStyled = styled.div`
  && {
    color: white;
    font-family: 'Signika',sans-serif;
    font-size: 15px;
    background-color: #eeeeee;
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
    text-align: center;
  }
`;

export const CardContainerStyled = styled.div`
  && {
    padding: 6rem 1rem;
    @media(min-width: 600px) {
      padding: 10rem 0;
    }
    background-color: #eeeeee;
  }
`;
