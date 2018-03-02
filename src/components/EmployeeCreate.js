import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Card} from './common/Card';
import {CardSection} from './common/CardSection';
import {Input} from './common/Input';
import {Button} from './common/Button';



class EmployeeCreate extends Component {
    render(){
        return(
     <Card>
        <CardSection>
            <Input
            label="Name"
            placeholder="John Smith"
             />
        </CardSection>
      
        <CardSection>
        <Input
        label="Phone"
        placeholder="9000900000"
        />
        </CardSection>
        <CardSection>
            <Button>
                Create
                </Button>
        </CardSection>
    </Card>
        );
    }
}
export default EmployeeCreate;