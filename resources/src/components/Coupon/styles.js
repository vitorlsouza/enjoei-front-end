import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    &.discount {
      display: flex;
      align-items: flex-end;
      color: #f77274;
      padding-bottom: 13px;
    }
  }
`;
