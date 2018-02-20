// @flow
import { createSelector } from 'reselect';

export const weightliftingExerciseSelector = createSelector(
    state => state,
    (session) => {
      console.log("The session is...", session);
      console.log("The session is...", session.weightliftingExercises);

      // FIXME -- Pretty sure this is undefined - What am I supposed to do here?
      return session.weightliftingExercise;

        // We could also do orm.User.withId(userId).todos.map(...)
        // but this saves a query on the User table.
        //
        // `.withRefs` means that the next operation (in this case filter)
        // will use direct references from the state instead of Model instances.
        // If you don't need any Model instance methods, you should use withRefs.
        // return session.weightliftingExercise.all()
        //     .toModelArray()
        //     .map(weightliftingExercise => {
        //
        //         // Returns a reference to the raw object in the store,
        //         // so it doesn't include any reverse or m2m fields.
        //         const obj = weightliftingExercise.ref;
        //         // Object.keys(obj) === ['id', 'name']
        //
        //         return Object.assign( {}, obj, {
        //             sets: weightliftingExercise.sets.toModelArray(),
        //         });
        //     });

        // return session.WeightliftingExercise.all().toModelArray();
    }
);
