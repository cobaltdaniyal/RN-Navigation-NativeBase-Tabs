import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Picker } from '@react-native-picker/picker';


class TabOne extends Component {
    state = {
        language: 'java',
    };
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item style={{ padding: 5 }} floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item style={{ padding: 5 }} floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        {/* Picker Start >>>>>>>>>>>>>>>>>>>> */}
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        {/* Picker Enf >>>>>>>>>>>>>>>>>>>> */}

                    </Form>
                    <Button style={{ margin: 10 }} full success>
                        <Text>Success</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
export default TabOne;