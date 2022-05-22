import styled from 'styled-components';

export const StyledCustomSpinner = styled.div`    
  && {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(255,255,255,0.7);
    z-index: 9999;
    color: #f7b643;
    font-weight: 900;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;