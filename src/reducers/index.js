// @flow
import { combineReducers } from 'redux';

import weightliftingExerciseReducer from './WeightliftingExercise';
import weightliftingExerciseSetRepReducer from './WeightliftingExerciseSetRep';

const reducers = combineReducers({
  weightliftingExercises: weightliftingExerciseReducer,
  weightliftingExerciseSetReps: weightliftingExerciseSetRepReducer,
});

export default reducers;


/*
Questions:

- When using reducers, should the parent entity handle the state stuff or what?
-- Probably let each entity handle its own state change, let parent entity watch the states / variables

- How are states changed / watched?
-- I believe actions / reducers automatically rerender everything
*/
