import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Button, Text, Right } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Text>
                WHAT UP DAWGS?{"\n"}
                Open up App.js to start working on your app!{"\n"}
                Changes you make will automatically reload.{"\n"}
                Shake your phone to open the developer menu.
              </Text>
            </CardItem>
            <CardItem>
              <Body />
              <Right>
                <Button>
                  <Text>A button, yo</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);
