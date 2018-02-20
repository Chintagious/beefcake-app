// @flow
import PropTypes from 'prop-types';
import { WeightliftingExercise } from '../WeightliftingExercise';
import { generateUUID } from '../../lib/uuid';

export class WeightliftingExerciseSetRep {

}

/*
WeightliftingExerciseSetRep.modelName = "WeightliftingExerciseSetRep";
WeightliftingExerciseSetRep.fields = {
    id: attr({ getDefault: () => generateUUID() }),
    repsCompleted: attr(),
    repsForSuccess: attr(),
    successCriteriaType: attr(),
}
WeightliftingExerciseSetRep.backend = {
  idAttribute: 'id',
}

  // repsCompleted: 5,
  // repsForSuccess: 5,
  // successCriteriaType: 'SUCCESS_VALUE'
// TODO - change this to use flow?
WeightliftingExerciseSetRep.propTypes = {
    id: PropTypes.number,
    weightliftingExercise: fk('WeightliftingExercise', 'sets'),
    repsCompleted: PropTypes.number.isRequired,
    repsForSuccess: PropTypes.number.isRequired,
    successCriteriaType: PropTypes.string.isRequired, // TODO change this to enum
};

// WeightliftingExerciseSetRep.defaultProps = {
//     isFetching: false,
// };

*/
