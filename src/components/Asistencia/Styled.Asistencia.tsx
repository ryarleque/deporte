import { CheckCircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { keyframes } from 'styled-components'

export const AsistenciaContentStyled = styled.div`    
  && {
    display: flex;
  }
`;

export const AsistenciaInnerContentStyled = styled.div`    
  && {
    padding: 2rem;
    width: 100%;
  }
`;

export const AsistenciaInnerTitleContentStyled = styled.div`    
  && {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`;

export const CustomContainerStyled = styled.div`    
  && {
    width: 400px;
    margin: 0 auto;
  }
`;


export const SeleccionarSedeContenrStyled = styled.div`    
  && {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const SelectItemContenrStyled = styled.select`    
  && {
    margin-left: 1rem;
    border-radius: 6px;
    padding: 0.25rem;
  }
`; 

export const CardStyled = styled.div`
  && {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    background: #f7b643;
    border-radius: 6px;
    padding: 1rem 1rem 0.5rem 1rem;
    position: relative;
  }
`;

export const CheckCircleFillStyled = styled(CheckCircleFill)`
  && {
    position: absolute;
    top: 50%;
    right: 50%;
    color: green;
    transform: translate(50%,-50%);
    width: 80px;
    height: 80px;
  }
`;

export const CheckInnerContentStyled = styled.div`
  && {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    background: #808080cc;
  }
`;

export const CardSectitonTopStyled = styled.div`
  && {
    display: block;
    align-items: center;
    text-align: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
`;

export const CardSectitonTopTitleStyled = styled.div`
  && {
    font-weight: 700;
  }
`;

export const CardSectitonTopInputStyled = styled.input`
  && {
    margin-right: 0.5rem;
  }
`;

export const CardSectitonBottomStyled = styled.input`
  && {
    border: 2px solid #dddfe2;
    color: #1d2129;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
    &:hover {
      box-shadow: 2px 4px 8px 0px #4b4b8b3b, 0 8px 16px rgb(0 0 0 / 10%);
    }
  }
`;

export const Button2HeaderStyled = styled.div`    
  && {
    background-color: #a21503;
    border-color: #a21503;
    color: white;
    padding: 10px 40px;
    font-family: 'Signika',sans-serif;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
`; 