// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
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
  Right,
} from 'native-base';

type Props = {
  exerciseName: string,
  instructions?: string,
  sets: number,
  maxRepsPerSet: number,
  isLastSetToFailure?: boolean,
};

type State = {
  repValues: Array<number>, // Array size should be same as sets value, if specified
};

  // Consts
const UNSPECIFIED_REPS_VALUE = 0;

export default class ExerciseCard extends Component<Props, State> {

  static defaultProps = {
    isLastSetToFailure: false,
  };

  state = {
    repValues: [],
  };

  message = "Did not change";

  constructor(props?: Props, context?: any) {
    super(props, context);

    // If state is not initialized...
    if (this.state.repValues.length === 0) {
      // Set default values...
      for (var i = 0; i < this.props.sets; i++) {
        // Don't like the way this is done...
        this.state.repValues.push(UNSPECIFIED_REPS_VALUE);
      }
    }

    if (this.state.repValues.length !== this.props.sets) {
      this.message = "Oh hell nah, this shit ain't set up right.";
    }

  };

  // TODO - Change this to generate custom component instead
  generateRepItemViews() {
    let repItemViews = [];

    for (var i = 0; i < this.props.sets; i++) {
      let repVal = this.state.repValues[i];
      let display = "";

      if (repVal === this.UNSPECIFIED_REPS_VALUE) {
        repVal = 0;
      }

      display = repVal + " of " + this.props.maxRepsPerSet;
      if (i === this.props.sets - 1) {
        display += (this.props.isLastSetToFailure ? "+" : "");
      }

      repItemViews.push(
        <View key={'repItem_' + i} style={{width: 50, height: 50, backgroundColor: 'powderblue', alignItems: "center", justifyContent: "center"}}>
          <Text>{display}</Text>
        </View>);
    }

    return repItemViews;
  }

  render() {
    let repItemViews = this.generateRepItemViews();

    return (
      <Card>
        <Header>
          <Text style={styles.welcome}>
            {this.props.exerciseName}
          </Text>
        </Header>
        <CardItem>
          <Text style={styles.instructions}>
          {this.message}
          </Text>
        </CardItem>
        <CardItem>
          <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            {repItemViews}
          </Body>
        </CardItem>
      </Card>
    )
  }

}

// TODO figure out how to move this into its own file
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
