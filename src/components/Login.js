import React,{Component} from 'react';
import { Button,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Login extends Component{
  render(){
    return (
            <Button onPress={Actions.register}><Text>Replace screen</Text></Button>
    )
  }
}

export default Login;
