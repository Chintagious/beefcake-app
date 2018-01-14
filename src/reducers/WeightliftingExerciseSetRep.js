// @flow
import orm from '../orm';
// import {
// } from '../actionTypes';

// const initialState = orm.session(orm.getEmptyState());

export default function weightliftingExerciseSetRepReducer(dbState: Object, action: Object) {
    console.log("Running WeightliftingExerciseSetRep reducer.. ", action);

    const session = orm.session(dbState);

    // Session-specific Models are available
    // as properties on the Session instance.
    const {
      WeightliftingExercise,
      WeightliftingExerciseSetRep,
    } = session;


    switch (action.type) {
      default:
        break;
    }

    // the state property of Session always points to the current database.
    // Updates don't mutate the original state, so this reference is not
    // equal to `dbState` that was an argument to this reducer.
    return session.state;
}
