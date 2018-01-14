// @flow
import {
  CREATE_WEIGHTLIFTING_EXERCISE,
  DELETE_WEIGHTLIFTING_EXERCISE,
} from '../actionTypes';

export const createWeightliftingExercise = (exercise: Object) => {
  console.log("Create weightlifting exercise action called.. This action: " + CREATE_WEIGHTLIFTING_EXERCISE);
  return {
    type: CREATE_WEIGHTLIFTING_EXERCISE,
    payload: exercise,
  };
}

export const deleteWeightliftingExercise = (id: Number) => {
  return {
    type: DELETE_WEIGHTLIFTING_EXERCISE,
    payload: id,
  };
}
