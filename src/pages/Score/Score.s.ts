import styled from 'styled-components';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const ListWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const CorrectAnswerIcon = styled(CheckCircleOutlined)`
  color: ${props => props.theme.colors.functional.success};
`;

export const IncorrectAnswerIcon = styled(CloseCircleOutlined)`
  color: ${props => props.theme.colors.functional.error};
`;
