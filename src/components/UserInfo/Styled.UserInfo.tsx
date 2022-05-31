import styled from 'styled-components';

export const UserInfoContentStyled = styled.div`    
  && {
    display: flex;
  }
`;

export const UserContainerStyled = styled.div`    
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

export const UserTitleStyled = styled.div`    
  && {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align:center;
    @media(min-width: 600px) {
      margin-bottom: 4rem;
    }
  }
`;

export const UserInfoList = styled.div`    
  && {
    margin: 1rem 0;
  }
`;

export const UserSubTitleStyled = styled.div`    
  && {
    color: #f7b643;
    font-weight: 700;
  }
`;

