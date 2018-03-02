import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged,loginUser } from '../actions';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Spinner } from './common/Spinner';
import { View, Text } from 'react-native';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    // CHECK LOGIN
    onButtonPress() {
        const { email,password } = this.props;
        this.props.loginUser({email, password });
        console.log("button-pressed");
    }
    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />;
        }
        return(
             <Button onPress={this.onButtonPress.bind(this)}>
                        Login
             </Button>
        );
    }
    //CALLED WHEN USER ENTERS WRONG CREDENTIALS
    renderError() {
        if (this.props.error) {
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style ={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                <Input
                    label = "Email"
                    placeholder= "username@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={ this.props.email } />
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    label= "Password"
                    placeholder= "password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
                
                </CardSection>
                
                {this.renderError()} 
                <CardSection>
                  {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email,password,error,loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};
export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(LoginForm);
//import { Card, CardSection, Input } from './common';