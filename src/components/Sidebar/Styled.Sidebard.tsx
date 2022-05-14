import styled from 'styled-components';

export const ContentListStyled = styled.div`
  && {
    display: flex;
    background: #1877f2;
    border-radius: 6px;
    justify-content: space-evenly;
    margin-right: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 0.25rem 0;
    position: fixed;
    bottom: 0;
    @media(min-width: 600px) {
        width: 5rem;
        padding: 1rem;
        flex-direction: column;
        height: 98vh;
        align-items: center;
        justify-content: space-around;        
        margin-right: 2rem;
        position: relative;
    }
`;

export const IconStyled = styled.div`
  && {
    color: white;
    font-size: 2rem;
    cursor: pointer;
`;