import styled from 'styled-components';
import { List } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const StyledListItem = styled(List.Item)`
  width: 550px;
`;

export const CorrectAnswerIcon = styled(CheckCircleOutlined)`
  color: ${props => props.theme.colors.functional.success};
`;

export const IncorrectAnswerIcon = styled(CloseCircleOutlined)`
  color: ${props => props.theme.colors.functional.error};
`;
