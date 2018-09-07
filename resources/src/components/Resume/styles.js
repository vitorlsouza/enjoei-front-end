import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;

  span {
    &.discount {
      color: #f77274;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
`;
