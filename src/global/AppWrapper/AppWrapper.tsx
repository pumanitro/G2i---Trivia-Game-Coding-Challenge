import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  justify-content: center;

  margin: auto;
  padding: 24px;
  width: auto;
  @media (min-width: 768px) {
    width: 600px;
  }
`;
