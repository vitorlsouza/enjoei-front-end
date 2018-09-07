import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 30px 20px 30px 20px;

  img {
    width: 120px;
    height: 128px;
    border-radius: 3px;
    align-self: center;
  }
`;

export const Coupons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;
