/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Text,
  Right
} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class BeefcakeApp extends Component<{}> {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>
              Beefcake app
            </Text>
          </Body>
        </Header>
        <Content>
          <Card>
            <Header>
              <Text style={styles.welcome}>
                What up, test dawgs?
              </Text>
            </Header>
            <CardItem>
              <Text style={styles.instructions}>
                To get started, edit App.js
              </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.instructions}>
                {instructions}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'right',
    color: '#333333',
    marginBottom: 5,
  },
});
