import React, {
  Component,
} from 'react';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';

class App extends Component{
    render() {
        return (
            <Router>
                <Scene key="root">
                <Scene key="login" component={Login} title="Login" titleStyle={{alignSelf: 'center',color: 'white'}} navigationBarStyle={{backgroundColor: 'green'}}/>
                <Scene key="register" component={Register} title="Register" titleStyle={{alignSelf: 'center'}}/>
                </Scene>
            </Router>
        )
    }
}

export default App;
