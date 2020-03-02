import React,{Component} from 'react';
import { Button,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Register extends Component{
  render(){
    return (
        <Button onPress={Actions.login}><Text>Replace screen</Text></Button>
    )
  }
}

export default Register;
