// @flow
import {
  WeightliftingExercise,
  WeightliftingExerciseSetRep,
} from '../data/models';

// Ref:
// - https://github.com/tommikaikkonen/redux-orm-primer/blob/migrate_to_0_9/app/index.js
// - https://github.com/tommikaikkonen/redux-orm-primer/blob/migrate_to_0_9/app/bootstrap.js
export default function bootstrap() {

  return {
    weightliftingExercises: [],
    weightliftingExerciseSetReps: [],
  };
}
