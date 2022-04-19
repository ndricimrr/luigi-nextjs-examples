import React from 'react';
import {
  addInitListener,
  removeInitListener
} from '@luigi-project/client';
import history from '../history';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      url: '',
      switch: false,
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
        <h3>This is orders page</h3>
        <br/>
          <button onClick={()=>  history.push('/details')}>Go to Deep Link</button>

             <p style={{color: 'red'}}>Current Microfrontend URL: <b>{this.state.url}</b></p>
      </div>
    );
  }
}
