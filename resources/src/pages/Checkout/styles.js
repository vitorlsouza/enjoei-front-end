import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid #f4f2f0;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 7;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin: 30px 20px 0px 20px;

  img {
    width: 120px;
    height: 128px;
    border-radius: 3px;
    align-self: center;
  }
`;

export const Coupons = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-top: 20px;
`;

export const Resumes = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #f4f2f0;

  button {
    flex: 1;
    padding: 13px 0 13px 0;
    margin: 0 10px 0 10px;

    &.cancelar {
      color: #f77274;
    }

    &.confirmar {
      color: #fff;
      background: #f77274;
    }
  }
`;
