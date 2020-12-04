import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  return <Spin indicator={antIcon} />;
};
