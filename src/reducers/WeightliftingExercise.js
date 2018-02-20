// @flow
import {
  CREATE_WEIGHTLIFTING_EXERCISE,
  DELETE_WEIGHTLIFTING_EXERCISE,
} from '../actionTypes';

var defaultState = {
    WeightliftingExercise: [],
    WeightliftingExerciseSetRep: [],
}

// FIXME - This likely is no longer correct after removing ORM
export default function weightliftingExerciseReducer(
  initialState: Object = defaultState,
  action: Object,
) {

    return (state: Object = initialState, action: Object) => {
    console.log("Running WeightliftingExercise reducer.. ", action);

    // Session-specific Models are available
    // as properties on the Session instance.
    const {
      WeightliftingExercise,
      WeightliftingExerciseSetRep,
    } = state;

    switch (action.type) {

    case CREATE_WEIGHTLIFTING_EXERCISE:
      let sets = [];
      let firstSetData = {
        repsCompleted: 5,
        repsForSuccess: 5,
        successCriteriaType: 'SUCCESS_VALUE',
      };
      let secondSetData = {
        repsCompleted: 3,
        repsForSuccess: 5,
        successCriteriaType: 'SUCCESS_VALUE',
      };
      let thirdSetData = {
        repsCompleted: 2,
        repsForSuccess: 5,
        successCriteriaType: 'AT_LEAST_SUCCESS_VALUE',
      };

      sets.push(WeightliftingExerciseSetRep.create(firstSetData));
      sets.push(WeightliftingExerciseSetRep.create(secondSetData));
      sets.push(WeightliftingExerciseSetRep.create(thirdSetData));

      let count = WeightliftingExercise.count() + 1;

      let payload = {
        "id": count,
        "name": `Test Weightlifting Exercise ` + count,
        "type": "Test",
        "sets": sets
      }

      WeightliftingExercise.create(payload);
      state.WeightliftingExercise[count]
      // WeightliftingExercise.create(action.payload);
      break;

    case DELETE_WEIGHTLIFTING_EXERCISE:
        WeightliftingExercise.withId(action.payload.id).delete();
        break;
    }

    // the state property of Session always points to the current database.
    // Updates don't mutate the original state, so this reference is not
    // equal to `dbState` that was an argument to this reducer.
    return state;
  }
}
/*


// FIXME - this is not right.. initial state should be an array indexed by an ID
// Done by following this: https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
// Maybe need to look up how to use classes here instead so the `byId` is a specific structure for the entity
// https://redux.js.org/docs/recipes/reducers/UpdatingNormalizedData.html
// https://github.com/tommikaikkonen/redux-orm
// https://github.com/tommikaikkonen/redux-orm-proptypes
// http://blog.isquaredsoftware.com/2016/10/practical-redux-part-1-redux-orm-basics/
const initialState = {
  id: 0, // Use shortId to generate this...
  type: null, // e.g. Squats, deadlifts, etc.
  sets: [],
  maxRepsPerSetValues: [], // The maximum number of reps possible for this exercise, positive value or “infinite” (but probably want to cap it at some displayable value like 99)
  completedRepsPerSetValues: [], // These are the value we’ll be displaying / altering as the workouts get completed
};

// NOTE: We should change maxRepsPerSetValues and completedRepsPerSetValues into one object, and this object can hold an array of those objects. This way, the size of maxRepsPerSetValues and completedRepsPerSetValues can never go out of sync
// Something like...
  //
  // sets: [
  //   {
  //     repsCompleted: 5,
  //     repsForSuccess: 5,
  //     successCriteriaType: 'SUCCESS_VALUE'
  //   },
  //   {
  //     repsCompleted: 0,
  //     repsForSuccess: 5,
  //     successCriteriaType: 'AT_LEAST_SUCCESS_VALUE'
  //   },
  // ]


export default function weightliftingExercisesReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

*/
