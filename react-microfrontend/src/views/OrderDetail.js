import React from 'react';
import {
  addInitListener,
  removeInitListener
} from '@luigi-project/client';

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      url: ''
    };
    this.initListener = null;
    this.contextUpdateListener = null;
  }

  componentDidMount() {
    this.initListener = addInitListener(initialContext => {
      this.setState({
        message: 'Luigi Client initialized.',
        url: window.location.href
      });
    });
  }

  componentWillUnmount() {
    removeInitListener(this.initListener);
  }

  render() {
    return (
      <div>
        <h3 style={{color: 'blue'}}>Order Details</h3>
        <br/>
          <React.Fragment>
              <br/>
              test
          </React.Fragment>
      </div>
    );
  }
}
