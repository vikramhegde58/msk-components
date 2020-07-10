import React from 'react';
import ReactDom from 'react-dom';
import ConnectedApp from './app';

const ReduxApp = () => {
  return (
    <ConnectedApp />
  )
}

ReactDom.render(<ReduxApp />, document.getElementById("root"));