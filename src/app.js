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
  connect,
  // dipatch,
} from 'react-redux';
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
import PropTypes from 'prop-types';

import {
  weightliftingExerciseSelector,
  weightliftingExerciseSetRepSelector,
} from './data/selectors';
import ExerciseCard from './components/ExerciseCard';

// TODO move this to actions..
// import {
//   CREATE_WEIGHTLIFTING_EXERCISE,
//   DELETE_WEIGHTLIFTING_EXERCISE,
// } from './actionTypes';
import {
  createWeightliftingExercise,
  deleteWeightliftingExercise,
} from './actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  createWeightliftingExercise: PropTypes.func.isRequired,
  deleteWeightliftingExercise: PropTypes.func.isRequired,
}

class BeefcakeApp extends Component<Props> {
  render() {
    console.log("rendering..", this.props);
    console.log("Fiddna create an exercise");
    // this.props.createWeightliftingExercise({ "Test": 1});
    // let appContent = this.getTempContents();
    // const { create } = this.props;

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
          <ExerciseCard
            exerciseName={"Squats"}
            reps={3}
            maxRepsPerSet={5}
            sets={5}
            isLastSetToFailure={true}/>

            <Button onPress={this.props.createWeightliftingExercise({})}>
              <Text>Add Exercise...</Text>
            </Button>
        </Content>
      </Container>
    );
  };

  // getTempContents() {
  //   let tempContent;
  //
  //   return tempContent;
  // }
}

function mapStateToProps(state, props) {
    console.log("Mapping state to props..", state, props);
    return {
      ...props,
      weightliftingExercises: weightliftingExerciseSelector(state),
      // weightliftingExerciseSetReps: weightliftingExerciseSetRepSelector(state),
    };
}

const mapDispatchToProps = {
    createWeightliftingExercise,
    deleteWeightliftingExercise,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeefcakeApp);
