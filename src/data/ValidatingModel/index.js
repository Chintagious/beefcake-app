// @flow
import { PropTypes } from 'react';
import { Model } from 'redux-orm';
// import getEnv from 'get-env'; // FIXME

const env = 'dev'; //getEnv();

// Refs:
//  - https://gist.github.com/tommikaikkonen/45d0d2ff2a5a383bb14d
//  - https://github.com/tommikaikkonen/redux-orm-primer
export class ValidatingModel extends Model {
    static _validateProps(props) {
        if (typeof this.propTypes === 'object' && this.propTypes != null) {
            // FIXME -- forOwn is not something a part of JS, takes object and iterates through object
            // forOwn(this.propTypes, (validator, key) => {
            //     const result = validator(props, key, this.modelName);
            //     if (result instanceof Error) {
            //         throw result;
            //     }
            // });
        }
    };

    static create(props: Object): this {
        const defaults = this.hasOwnProperty('defaultProps')
            ? this.defaultProps
            : {};
        const propsWithDefaults = Object.assign({}, defaults, props);

        if (env !== 'prod') {
            this._validateProps(propsWithDefaults);
        }

        return super.create(propsWithDefaults);
    }
};
