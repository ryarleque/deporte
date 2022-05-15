import styled from 'styled-components';

export const ContentListStyled = styled.div`
  && {
    display: flex;
    background: black;
    border-radius: 6px;
    justify-content: space-evenly;
    margin-right: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 0.25rem 0;
    position: fixed;
    bottom: 0;
    box-shadow: 3px -5px 9px 6px rgb(0 0 0 / 36%), 0 8px 16px rgb(0 0 0 / 10%);
    @media(min-width: 600px) {
        width: 5rem;
        padding: 0;
        flex-direction: column;
        height: 98vh;
        align-items: center;
        justify-content: space-around;        
        margin-right: 2rem;
        position: relative;
        box-shadow: 7px 4px 9px 6px rgb(0 0 0 / 36%), 0 8px 16px rgb(0 0 0 / 10%);
    }
`;

export const IconStyled = styled.div`
  && {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
        color: #0098b9;
    }
`;