// @flow
import PropTypes from 'prop-types';
import { Model, many, fk, attr } from 'redux-orm';
import { ValidatingModel } from '../ValidatingModel';
import { WeightliftingExerciseSetRep } from '../WeightliftingExerciseSetRep';
import { generateUUID } from '../../lib/uuid';

export class WeightliftingExercise extends Model {
//
// static reducer(action, model) {
// }

}

WeightliftingExercise.modelName = "WeightliftingExercise";
WeightliftingExercise.fields = {
  id: attr({ getDefault: () => generateUUID() }),
  name: attr(),
  type: attr(),
}

// TODO - change this to use flow?
WeightliftingExercise.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired, // TODO - temp value here
    type: PropTypes.string.isRequired, // TODO change to enum / model
    sets: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.instanceOf(WeightliftingExerciseSetRep)),
      PropTypes.arrayOf(PropTypes.number),
    ]),
};

// NOTE:
// type above will contain name, abbreviation(?), description, default set values
