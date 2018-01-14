// @flow
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

import orm from '../../orm';

const ormSelector = state => state.orm;

export const weightliftingExerciseSetRepSelector = createSelector(
    // The first input selector should always select the db-state.
    // Behind the scenes, `createSelector` begins a Redux-ORM session
    // with the value returned by `dbStateSelector` and passes
    // that Session instance as an argument instead.
    ormSelector,
    ormCreateSelector(orm, (session) => {
        return session.WeightliftingExerciseSetRep.all().toModelArray();
    })
);
