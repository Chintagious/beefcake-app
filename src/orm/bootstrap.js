// @flow
import { ORM } from 'redux-orm';
import {
  WeightliftingExercise,
  WeightliftingExerciseSetRep,
} from '../data/models';

// Ref:
// - https://github.com/tommikaikkonen/redux-orm-primer/blob/migrate_to_0_9/app/index.js
// - https://github.com/tommikaikkonen/redux-orm-primer/blob/migrate_to_0_9/app/bootstrap.js
export default function bootstrap(orm: ORM) {

  // Get the empty state according to our schema.
  const state = orm.getEmptyState();

  // Begin a mutating session with that state.
  // `state` will be mutated.
  const session = orm.session(state);

  // Model classes are available as properties of the
  // Session instance.
  const {
    WeightliftingExercise,
    WeightliftingExerciseSetRep,
  } = session;

  return {
    orm: state,
    weightliftingExercises: WeightliftingExercise,
    weightliftingExerciseSetReps: WeightliftingExerciseSetRep,
  };
}
