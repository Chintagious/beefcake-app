// @flow
// import {
// } from '../actionTypes';

var defaultState = {
    WeightliftingExercise: [],
    WeightliftingExerciseSetRep: [],
}

// FIXME - This likely is no longer correct after removing ORM
export default function weightliftingExerciseSetRepReducer(
  initialState: Object = defaultState,
  action: Object,
) {
  return (state: Object = initialState, action: Object) => {
    console.log("Running WeightliftingExerciseSetRep reducer.. ", action);

    // Session-specific Models are available
    // as properties on the Session instance.
    const {
      WeightliftingExercise,
      WeightliftingExerciseSetRep,
    } = state;


    switch (action.type) {
      default:
        break;
    }

    // the state property of Session always points to the current database.
    // Updates don't mutate the original state, so this reference is not
    // equal to `dbState` that was an argument to this reducer.
    return state;
  }
}
