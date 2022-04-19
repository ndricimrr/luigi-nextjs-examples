import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Orders from './views/Orders.js';
import OrderDetail from './views/OrderDetail';
import MainPage from './views/MainPage';
import {
  linkManager
} from '@luigi-project/client';
import history from './history';


class App extends React.Component {
 
  componentDidUpdate(prevProps) {
    console.log(this.props.location, prevProps.location);
  }

  componentDidMount() {
    // listen to every react rout change and call the withoutsync navigation call to enable virtaul/deeplinking navigation
    this.unlisten = history.listen((i)=>{
      linkManager().fromVirtualTreeRoot().withoutSync().navigate(i.pathname);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }
  
  render() {
    return (
      <Router history={history} >
       <Switch> 
         <Route exact path="/main-page" component={MainPage} />
          <Route exact path="/order" component={Orders}  />
          <Route exact path="/details" component={OrderDetail} />
          </Switch>
        </Router>
    );
  }
}

export default App;
