require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './Footer';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
				<Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
