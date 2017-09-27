import React from 'react';

const inject = WrappedComponent => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} newProp={'🤑'} />;
    }
  };
};

export default inject;
