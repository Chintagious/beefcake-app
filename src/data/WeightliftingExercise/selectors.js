// @flow
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

import orm from '../../orm';

const ormSelector = state => state.orm;

// const selector = ormCreateSelector(
// export const weightliftingExerciseSelector = ormCreateSelector(
//   orm, // This is undefined for some reason..
//   ormSelector,
//   (session, props) => session.WeightliftingExercise.all().toModelArray()
// );

// export const weightliftingExerciseSelector = state => {
//   const weightliftingExercises = selector(state);
//   return weightliftingExercises && weightliftingExercises.map(model => model._fields);
// }

export const weightliftingExerciseSelector = createSelector(
    // The first input selector should always be the orm selector.
    // Behind the scenes, `schema.createSelector` begins a Redux-ORM
    // session with the state selected by `ormSelector` and passes
    // that Session instance as an argument instead.
    // So, `orm` is a Session instance.
    ormSelector,
    ormCreateSelector(orm, (session) => {

        // We could also do orm.User.withId(userId).todos.map(...)
        // but this saves a query on the User table.
        //
        // `.withRefs` means that the next operation (in this case filter)
        // will use direct references from the state instead of Model instances.
        // If you don't need any Model instance methods, you should use withRefs.
        return session.WeightliftingExercise.all()
            .toModelArray()
            .map(weightliftingExercise => {

                // Returns a reference to the raw object in the store,
                // so it doesn't include any reverse or m2m fields.
                const obj = weightliftingExercise.ref;
                // Object.keys(obj) === ['id', 'name']

                return Object.assign( {}, obj, {
                    sets: weightliftingExercise.sets.toModelArray(),
                });
            });

        // return session.WeightliftingExercise.all().toModelArray();
    })
);
