// @flow
import { createSelector } from 'reselect';

export const weightliftingExerciseSetRepSelector = createSelector(
    // The first input selector should always select the db-state.
    // Behind the scenes, `createSelector` begins a Redux-ORM session
    // with the value returned by `dbStateSelector` and passes
    // that Session instance as an argument instead.
    state => state,
    (session) => {
        return session.WeightliftingExerciseSetRep.all().toModelArray();
    }
);
