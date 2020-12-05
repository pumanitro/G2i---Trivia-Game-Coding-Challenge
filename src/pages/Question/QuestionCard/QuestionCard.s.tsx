import styled from 'styled-components';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

export const QuestionMarkIcon = styled(QuestionCircleOutlined)`
  font-size: 48px;
  margin-right: 12px;
  color: ${props => props.theme.colors.main.primary};
`;

export const QuestionCardWrapper = styled(Card)`
  display: flex;

  & .ant-card-body {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
