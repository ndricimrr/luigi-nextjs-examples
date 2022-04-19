import React from 'react';
import {
  addInitListener,
  removeInitListener
} from '@luigi-project/client';

export default class MainPage extends React.Component {
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
        <h1>react-microfrontend app is running!</h1>
        <h3>This is main page</h3>
        <br/>
        <p style={{color: 'red'}}>Current Microfrontend URL: <b>{this.state.url}</b></p>
      </div>
    );
  }
}
