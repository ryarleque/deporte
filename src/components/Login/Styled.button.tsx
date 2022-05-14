import styled from 'styled-components';

export const ContainerStyled = styled.div`
  && {
    padding: 0 3rem;
    display: flex;
    height: 100vh;
    justify-content: center;
    background-repeat: no-repeat;
    align-items: center;
    background-image: url(https://www.storefutbol.com/co/wp-content/uploads/2020/02/futbol-soccer.jpg);
    background-size: contain;
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
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
  }
`;

export const InputStyled = styled.input`
  && {
    border: 2px solid #dddfe2;
    color: #1d2129;
    padding: 1rem;
    border-radius: 6px;
    font-size: 18px;
    outline: none;
    text-align: center;
    &.error {
        border: 2px solid red;
    }
  }
`;

export const ButtonStyled = styled.button`
  && {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    line-height: 48px;
    color: white;
    width: 100%;
    cursor: pointer;
    margin-top: 2rem;
`;

export const ErrorStyled = styled.div`
  && {
    color: red;
    position: relative;
    top: 1rem;
    font-weight: 700;
`;
