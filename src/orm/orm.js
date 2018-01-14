// // @flow
import { ORM } from 'redux-orm';
import {
  WeightliftingExercise,
  WeightliftingExerciseSetRep,
} from '../data/models';

export const orm = new ORM();
orm.register(WeightliftingExerciseSetRep, WeightliftingExercise);

export default orm;
