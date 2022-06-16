import { Component } from 'react';

/*

* It is good practice to the next structure for catching the errors

*/

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  };

  componentDidCatch(error, errorinfo) {
    console.log(error);
    console.log(errorinfo);
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }

    return this.props.children;
  }
};

export default ErrorBoundary;
