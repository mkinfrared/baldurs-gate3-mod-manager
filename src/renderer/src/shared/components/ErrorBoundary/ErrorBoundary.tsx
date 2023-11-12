import { Component, ReactNode } from "react";

import Error from "../Error";

type ErrorBoundaryProps = {
  children?: ReactNode;
  reset?: () => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<ErrorBoundaryProps, any> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    const { reset } = this.props;

    this.state = { ...initialState };

    reset?.();
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Error error={error?.message} />;
    }

    return children;
  }
}

export default ErrorBoundary;
