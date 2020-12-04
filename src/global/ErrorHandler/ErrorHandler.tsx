import React, { ReactNode, Component } from 'react';
import { Alert } from 'antd';

interface ErrorHandlerState {
  errorOccurred: boolean;
}

interface ErrorHandlerClassProps {
  children: ReactNode;
  t: (key: string) => string;
}

class ErrorHandlerClass extends Component<ErrorHandlerClassProps, ErrorHandlerState> {
  public state = { errorOccurred: false };

  componentDidCatch(): void {
    this.setState({ errorOccurred: true });
  }

  render(): ReactNode {
    if (this.state.errorOccurred) {
      setTimeout(() => window.location.reload(), 5000);
    }


    return this.state.errorOccurred ? (
      <Alert
        type="error"
        message={'Global Error'}
        description={'We catched some global error in here :('}
        banner
        showIcon
      />
    ) : (
      this.props.children
    );
  }
}

export const ErrorHandler = ErrorHandlerClass;
