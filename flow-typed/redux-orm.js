// Ref: https://gist.github.com/ahutchings/357001da662addb30e45e15fe87206e2
// Take a look at this in the future if completed: https://github.com/tommikaikkonen/redux-orm/issues/178
declare module 'redux-orm' {
  /**
   * The heart of an ORM, the data model.
   *
   * The fields you specify to the Model will be used to generate
   * a schema to the database, related property accessors, and
   * possibly through models.
   *
   * In each {@link Session} you instantiate from an {@link ORM} instance,
   * you will receive a session-specific subclass of this Model. The methods
   * you define here will be available to you in sessions.
   *
   * An instance of {@link Model} represents a record in the database, though
   * it is possible to generate multiple instances from the same record in the database.
   *
   * To create data models in your schema, subclass {@link Model}. To define
   * information about the data model, override static class methods. Define instance
   * logic by defining prototype methods (without `static` keyword).
   */
  declare export class Model {
    static all(): QuerySet<this>,

    /**
     * Creates a new record in the database, instantiates a {@link Model} and returns it.
     *
     * If you pass values for many-to-many fields, instances are created on the through
     * model as well.
     *
     * @param  {props} userProps - the new {@link Model}'s properties.
     * @return {Model} a new {@link Model} instance.
     */
    static create(props: Object): this,

    static get(lookupObj: Object): this,

    /**
     * Static variable propTypes.
     */
    static propTypes: Object,

    /**
     * Static variable defaultProps.
     */
    static defaultProps: Object,

    /**
     * Static variable modelName.
     */
    static modelName: string,

    /**
     * Static variable fields.
     */
    static fields: Object,

    /**
     * Static variable virtualFields.
     */
    static virtualFields: Object,

    /**
     * Static variable querySetClass.
     */
    static querySetClass: any,

    /**
     * The default reducer implementation.
     * If the user doesn't define a reducer, this is used.
     *
     * @param {Object} action - the dispatched action
     * @param {Model} modelClass - the concrete model class being used
     * @param {Session} session - the current {@link Session} instance
     * @return {undefined}
     */
    reducer(action: any, modelClass: any, session: Session): void,

    /**
     * Creates a Model instance from it's properties.
     * Don't use this to create a new record; Use the static method {@link Model#create}.
     * @param  {Object} props - the properties to instantiate with
     */
    constructor(props: Object): this,

    static toString(): string,
    static options: any,
    static markAccessed(): any,

    /**
     * Returns the id attribute of this {@link Model}.
     *
     * @return {string} The id attribute of this {@link Model}.
     */
    static idAttribute: any,

    /**
     * Connect the model class to a {@link Session}.
     *
     * @private
     * @param  {Session} session - The session to connect to.
     */
    static connect(session: Session): void,

    /**
     * Get the current {@link Session} instance.
     *
     * @private
     * @return {Session} The current {@link Session} instance.
     */
    static session: Session,
    static getQuerySet(): any,
    static invalidateClassCache(): any,
    static query: any,

    /**
     * Creates a new or update existing record in the database, instantiates a {@link Model} and returns it.
     *
     * If you pass values for many-to-many fields, instances are created on the through
     * model as well.
     *
     * @param  {props} userProps - the required {@link Model}'s properties.
     * @return {Model} a {@link Model} instance.
     */
    static upsert(userProps: Object): this,

    /**
     * Returns a {@link Model} instance for the object with id `id`.
     * This throws if the `id` doesn't exist. Use {@link Model#hasId}
     * to check for existence first if you're not certain.
     *
     * @param  {*} id - the `id` of the object to get
     * @throws If object with id `id` doesn't exist
     * @return {Model} {@link Model} instance with id `id`
     */
    static withId(id: any): this,

    /**
     * Returns a boolean indicating if an entity with the id `id` exists
     * in the state.
     *
     * @param  {*}  id - a value corresponding to the id attribute of the {@link Model} class.
     * @return {Boolean} a boolean indicating if entity with `id` exists in the state
     */
    static hasId(id: any): boolean,

    /**
     * Gets the {@link Model} instance that matches properties in `lookupObj`.
     * Throws an error if {@link Model} is not found, or multiple records match
     * the properties.
     *
     * @param  {Object} lookupObj - the properties used to match a single entity.
     * @return {Model} a {@link Model} instance that matches `lookupObj` properties.
     */
    get(lookupObj: Object): Model,

    /**
     * Gets the {@link Model} class or subclass constructor (the class that
     * instantiated this instance).
     *
     * @return {Model} The {@link Model} class or subclass constructor used to instantiate
     *                 this instance.
     */
    getClass(): Class<this>,

    /**
     * Gets the id value of the current instance by looking up the id attribute.
     * @return {*} The id value of the current instance.
     */
    getId(): any,

    /**
     * Returns a reference to the plain JS object in the store.
     * Make sure to not mutate this.
     *
     * @return {Object} a reference to the plain JS object in the store
     */
    ref: any,

    /**
     * Returns a string representation of the {@link Model} instance.
     *
     * @return {string} A string representation of this {@link Model} instance.
     */
    toString(): string,

    /**
     * Returns a boolean indicating if `otherModel` equals this {@link Model} instance.
     * Equality is determined by shallow comparing their attributes.
     *
     * @param  {Model} otherModel - a {@link Model} instance to compare
     * @return {Boolean} a boolean indicating if the {@link Model} instance's are equal.
     */
    equals(otherModel: Model): boolean,

    /**
     * Updates a property name to given value for this {@link Model} instance.
     * The values are immediately committed to the database.
     *
     * @param {string} propertyName - name of the property to set
     * @param {*} value - value assigned to the property
     * @return {undefined}
     */
    set(propertyName: string, value: any): void,

    /**
     * Assigns multiple fields and corresponding values to this {@link Model} instance.
     * The updates are immediately committed to the database.
     *
     * @param  {Object} userMergeObj - an object that will be merged with this instance.
     * @return {undefined}
     */
    update(userMergeObj: Object): void,

    /**
     * Updates {@link Model} instance attributes to reflect the
     * database state in the current session.
     * @return {undefined}
     */
    refreshFromState(): any,

    /**
     * Deletes the record for this {@link Model} instance.
     * You'll still be able to access fields and values on the instance.
     *
     * @return {undefined}
     */
    delete(): void
  }

  /**
   * ORM - the Object Relational Mapper.
   *
   * Use instances of this class to:
   *
   * - Register your {@link Model} classes using {@link ORM#register}
   * - Get the empty state for the underlying database with {@link ORM#getEmptyState}
   * - Start an immutable database session with {@link ORM#session}
   * - Start a mutating database session with {@link ORM#mutableSession}
   *
   * Internally, this class handles generating a schema specification from models
   * to the database.
   */
  declare export class ORM {
    /**
     * Creates a new ORM instance.
     */
    constructor(opts?: Object): this,
    registry: Array<Class<Model>>,

    /**
     * Registers a {@link Model} class to the ORM.
     *
     * If the model has declared any ManyToMany fields, their
     * through models will be generated and registered with
     * this call, unless a custom through model has been specified.
     *
     * @param  {...Model} model - a {@link Model} class to register
     * @return {undefined}
     */
    register(...models: Array<Class<Model>>): void,

    registerManyToManyModelsFor(model: Class<Model>): void,

    /**
     * Gets a {@link Model} class by its name from the registry.
     * @param  {string} modelName - the name of the {@link Model} class to get
     * @throws If {@link Model} class is not found.
     * @return {Model} the {@link Model} class, if found
     */
    get(modelName: string): Model,
    getModelClasses(): Array<Class<Model>>,
    isFieldInstalled(modelName: string, fieldName: string): boolean,
    setFieldInstalled(modelName: string, fieldName: string): void,
    generateSchemaSpec(): Object,
    getDatabase(): Object,

    /**
     * Returns the empty database state.
     * @return {Object} the empty state
     */
    getEmptyState(): Object,

    /**
     * Begins an immutable database session.
     *
     * @param  {Object} state  - the state the database manages
     * @return {Session} a new {@link Session} instance
     */
    session(state: Object): Session,

    /**
     * Begins a mutable database session.
     *
     * @param  {Object} state  - the state the database manages
     * @return {Session} a new {@link Session} instance
     */
    mutableSession(state: Object): Session
  }

  /**
   * This class is used to build and make queries to the database
   * and operating the resulting set (such as updating attributes
   * or deleting the records).
   *
   * The queries are built lazily. For example:
   *
   * ```javascript
   * const qs = Book.all()
   *     .filter(book => book.releaseYear > 1999)
   *     .orderBy('name');
   * ```
   *
   * Doesn't execute a query. The query is executed only when
   * you need information from the query result, such as {@link QuerySet#count},
   * {@link QuerySet#toRefArray}. After the query is executed, the resulting
   * set is cached in the QuerySet instance.
   *
   * QuerySet instances also return copies, so chaining filters doesn't
   * mutate the previous instances.
   */
  declare export class QuerySet<SubModel> {
    /**
     * Creates a QuerySet. The constructor is mainly for internal use;
     * You should access QuerySet instances from {@link Model}.
     *
     * @param  {Model} modelClass - the model class of objects in this QuerySet.
     * @param  {any[]} clauses - query clauses needed to evaluate the set.
     * @param {Object} [opts] - additional options
     */
    constructor(modelClass: Class<SubModel>, idArr?: number[], opts?: Object): this,
    rows: SubModel[],
    modelClass: any,

    /**
     * Returns an array of the plain objects represented by the QuerySet.
     * The plain objects are direct references to the store.
     *
     * @return {Object[]} references to the plain JS objects represented by
     *                    the QuerySet
     */
    toRefArray(): any[],

    /**
     * Returns an array of {@link Model} instances represented by the QuerySet.
     * @return {Model[]} model instances represented by the QuerySet
     */
    toModelArray(): SubModel[],

    /**
     * Returns the number of model instances represented by the QuerySet.
     * @return  length of the QuerySet
     */
    count(): number,

    /**
     * Returns the {@link Model} instance at index `index` in the {@link QuerySet} instance if
     * `withRefs` flag is set to `false`, or a reference to the plain JavaScript
     * object in the model state if `true`.
     *
     * @param  {number} index - index of the model instance to get
     * @return {Model|undefined} a {@link Model} instance at index
     *                           `index` in the {@link QuerySet} instance,
     *                           or undefined if the index is out of bounds.
     */
    at(index: number): SubModel | Object,

    /**
     * Returns a new {@link QuerySet} instance with the same entities.
     * @return  a new QuerySet with the same entities.
     */
    all(): QuerySet<SubModel>,

    /**
     * Returns the {@link Model} instance at index `QuerySet.count() - 1`
     * @return
     */
    last(): SubModel,

    /**
     * Returns the {@link Model} instance at index 0 in the {@link QuerySet} instance.
     * @return
     */
    first(): SubModel,

    /**
     * Checks if the {@link QuerySet} instance has any records matching the query
     * in the database.
     *
     * @return {Boolean} `true` if the {@link QuerySet} instance contains entities, else `false`.
     */
    exists(): boolean,

    /**
     * Returns a new {@link QuerySet} instance with entities that match properties in `lookupObj`.
     *
     * @param  {Object} lookupObj - the properties to match objects with.
     * @return {QuerySet} a new {@link QuerySet} instance with objects that passed the filter.
     */
    filter(lookupObj: Object): QuerySet<SubModel>,

    /**
     * Returns a new {@link QuerySet} instance with entities that do not match
     * properties in `lookupObj`.
     *
     * @param  {Object} lookupObj - the properties to unmatch objects with.
     * @return {QuerySet} a new {@link QuerySet} instance with objects that passed the filter.
     */
    exclude(lookupObj: Object): QuerySet<SubModel>,

    /**
     * Returns a new {@link QuerySet} instance with entities ordered by `iteratees` in ascending
     * order, unless otherwise specified. Delegates to `lodash.orderBy`.
     *
     * @param  {string[]|Function[]} iteratees - an array where each item can be a string or a
     *                                           function. If a string is supplied, it should
     *                                           correspond to property on the entity that will
     *                                           determine the order. If a function is supplied,
     *                                           it should return the value to order by.
     * @param {Boolean[]} [orders] - the sort orders of `iteratees`. If unspecified, all iteratees
     *                               will be sorted in ascending order. `true` and `'asc'`
     *                               correspond to ascending order, and `false` and `'desc`
     *                               to descending order.
     * @return {QuerySet} a new {@link QuerySet} with objects ordered by `iteratees`.
     */
    orderBy(
      iteratees: Array<string | (() => any)> | string,
      orders?: boolean[]
    ): QuerySet<SubModel>,

    /**
     * Records an update specified with `mergeObj` to all the objects
     * in the {@link QuerySet} instance.
     *
     * @param  {Object} mergeObj - an object to merge with all the objects in this
     *                             queryset.
     * @return {undefined}
     */
    update(mergeObj: Object): void,

    /**
     * Records a deletion of all the objects in this {@link QuerySet} instance.
     * @return {undefined}
     */
    delete(): void
  }

  /**
   * Creates a new Session.
   *
   * @param  {Database} db - a {@link Database} instance
   * @param  {Object} state - the database state
   * @param  {Boolean} [withMutations] - whether the session should mutate data
   * @param  {Object} [batchToken] - used by the backend to identify objects that can be
   *                                 mutated.
   */
  declare export class Session {
    /**
     * Creates a new Session.
     *
     * @param  {Database} db - a {@link Database} instance
     * @param  {Object} state - the database state
     * @param  {Boolean} [withMutations] - whether the session should mutate data
     * @param  {Object} [batchToken] - used by the backend to identify objects that can be
     *                                 mutated.
     */
    constructor(
      schema: ORM,
      db: Object,
      state?: Object,
      withMutations?: boolean,
      batchToken?: any
    ): this,
    schema: ORM,
    db: any,
    state: Object,
    initialState: any,
    withMutations: any,
    batchToken: any,
    modelData: any,
    models: any,
    sessionBoundModels: any,
    markAccessed(modelName: string): void,

    /**
     * Applies update to a model state.
     *
     * @private
     * @param {Object} update - the update object. Must have keys
     *                          `type`, `payload`.
     */
    applyUpdate(updateSpec: Object): Object
  }

  /**
   * A memoizer to use with redux-orm
   * selectors. When the memoized function is first run,
   * the memoizer will remember the models that are accessed
   * during that function run.
   *
   * On subsequent runs, the memoizer will check if those
   * models' states have changed compared to the previous run.
   *
   * Memoization algorithm operates like this:
   *
   * 1. Has the selector been run before? If not, go to 5.
   *
   * 2. If the selector has other input selectors in addition to the
   *    ORM state selector, check their results for equality with the previous results.
   *    If they aren't equal, go to 5.
   *
   * 3. Is the ORM state referentially equal to the previous ORM state the selector
   *    was called with? If yes, return the previous result.
   *
   * 4. Check which Model's states the selector has accessed on previous runs.
   *    Check for equality with each of those states versus their states in the
   *    previous ORM state. If all of them are equal, return the previous result.
   *
   * 5. Run the selector. Check the Session object used by the selector for
   *    which Model's states were accessed, and merge them with the previously
   *    saved information about accessed models (if-else branching can change
   *    which models are accessed on different inputs). Save the ORM state and
   *    other arguments the selector was called with, overriding previously
   *    saved values. Save the selector result. Return the selector result.
   *
   * @private
   * @param  {Function} func - function to memoize
   * @param  {Function} equalityCheck - equality check function to use with normal
   *                                  selector args
   * @param  {ORM} orm - a redux-orm ORM instance
   * @return {Function} `func` memoized.
   */
  declare export function memoize(func: () => any, equalityCheck: () => any, orm: ORM): () => any;

  declare var npm$namespace$utils: {
    m2mName: typeof utils$m2mName,
    m2mFromFieldName: typeof utils$m2mFromFieldName,
    m2mToFieldName: typeof utils$m2mToFieldName,
    normalizeEntity: typeof utils$normalizeEntity
  };

  /**
   * Returns the branch name for a many-to-many relation.
   * The name is the combination of the model name and the field name the relation
   * was declared. The field name's first letter is capitalized.
   *
   * Example: model `Author` has a many-to-many relation to the model `Book`, defined
   * in the `Author` field `books`. The many-to-many branch name will be `AuthorBooks`.
   *
   * @private
   * @param  {string} declarationModelName - the name of the model the many-to-many relation was declared on
   * @param  {string} fieldName            - the field name where the many-to-many relation was declared on
   * @return {string} The branch name for the many-to-many relation.
   */
  declare function utils$m2mName(declarationModelName: string, fieldName: string): string;

  /**
   * Returns the fieldname that saves a foreign key to the
   * model id where the many-to-many relation was declared.
   *
   * Example: `Author` => `fromAuthorId`
   *
   * @private
   * @param  {string} declarationModelName - the name of the model where the relation was declared
   * @return {string} the field name in the through model for `declarationModelName`'s foreign key.
   */
  declare function utils$m2mFromFieldName(declarationModelName: string): string;

  /**
   * Returns the fieldname that saves a foreign key in a many-to-many through model to the
   * model where the many-to-many relation was declared.
   *
   * Example: `Book` => `toBookId`
   *
   * @private
   * @param  {string} otherModelName - the name of the model that was the target of the many-to-many
   *                                   declaration.
   * @return {string} the field name in the through model for `otherModelName`'s foreign key..
   */
  declare function utils$m2mToFieldName(otherModelName: string): string;

  /**
   * Normalizes `entity` to an id, where `entity` can be an id
   * or a Model instance.
   *
   * @private
   * @param  {*} entity - either a Model instance or an id value
   * @return {*} the id value of `entity`
   */
  declare function utils$normalizeEntity(entity: any): any;
  declare export function createSelector(orm: ORM, ...args: any[]): any;

  /**
   * Defines a value attribute on the model.
   * Though not required, it is recommended to define this for each non-foreign key you wish to use.
   * Getters and setters need to be defined on each Model
   * instantiation for undeclared data fields, which is slower.
   * You can use the optional `getDefault` parameter to fill in unpassed values
   * to {@link Model#create}, such as for generating ID's with UUID:
   *
   * ```javascript
   * import getUUID from 'your-uuid-package-of-choice';
   *
   * fields = {
   *   id: attr({ getDefault: () => getUUID() }),
   *   title: attr(),
   * }
   * ```
   *
   * @param  {Object} [opts]
   * @param {Function} [opts.getDefault] - if you give a function here, it's return
   *                                       value from calling with zero arguments will
   *                                       be used as the value when creating a new Model
   *                                       instance with {@link Model#create} if the field
   *                                       value is not passed.
   * @return {Attribute}
   */
  declare export function attr(opts?: {
    getDefault: any | (() => any)
  }): void;

  /**
   * Defines a foreign key on a model, which points
   * to a single entity on another model.
   *
   * You can pass arguments as either a single object,
   * or two arguments.
   *
   * If you pass two arguments, the first one is the name
   * of the Model the foreign key is pointing to, and
   * the second one is an optional related name, which will
   * be used to access the Model the foreign key
   * is being defined from, from the target Model.
   *
   * If the related name is not passed, it will be set as
   * `${toModelName}Set`.
   *
   * If you pass an object to `fk`, it has to be in the form
   *
   * ```javascript
   * fields = {
   *   author: fk({ to: 'Author', relatedName: 'books' })
   * }
   * ```
   *
   * Which is equal to
   *
   * ```javascript
   * fields = {
   *   author: fk('Author', 'books'),
   * }
   * ```
   *
   * @param  {string|boolean} toModelNameOrObj - the `modelName` property of
   *                                           the Model that is the target of the
   *                                           foreign key, or an object with properties
   *                                           `to` and optionally `relatedName`.
   * @param {string} [relatedName] - if you didn't pass an object as the first argument,
   *                                 this is the property name that will be used to
   *                                 access a QuerySet the foreign key is defined from,
   *                                 from the target model.
   * @return {ForeignKey}
   */
  declare export function fk(
    toModelNameOrObj:
      | string
      | {
          to: string,
          relatedName?: string
        },
    relatedName?: string
  ): any;

  /**
   * Defines a many-to-many relationship between
   * this (source) and another (target) model.
   *
   * The relationship is modeled with an extra model called the through model.
   * The through model has foreign keys to both the source and target models.
   *
   * You can define your own through model if you want to associate more information
   * to the relationship. A custom through model must have at least two foreign keys,
   * one pointing to the source Model, and one pointing to the target Model.
   *
   * If you have more than one foreign key pointing to a source or target Model in the
   * through Model, you must pass the option `throughFields`, which is an array of two
   * strings, where the strings are the field names that identify the foreign keys to
   * be used for the many-to-many relationship. Redux-ORM will figure out which field name
   * points to which model by checking the through Model definition.
   *
   * Unlike `fk`, this function accepts only an object argument.
   *
   * ```javascript
   * class Authorship extends Model {}
   * Authorship.modelName = 'Authorship';
   * Authorship.fields = {
   *   author: fk('Author', 'authorships'),
   *   book: fk('Book', 'authorships'),
   * };
   *
   * class Author extends Model {}
   * Author.modelName = 'Author';
   * Author.fields = {
   *   books: many({
   *     to: 'Book',
   *     relatedName: 'authors',
   *     through: 'Authorship',
   *
   *     // this is optional, since Redux-ORM can figure
   *     // out the through fields itself as there aren't
   *     // multiple foreign keys pointing to the same models.
   *     throughFields: ['author', 'book'],
   *   })
   * };
   *
   * class Book extends Model {}
   * Book.modelName = 'Book';
   * ```
   *
   * You should only define the many-to-many relationship on one side. In the
   * above case of Authors to Books through Authorships, the relationship is
   * defined only on the Author model.
   *
   * @param  {Object} options - options
   * @param  {string} options.to - the `modelName` attribute of the target Model.
   * @param  {string} [options.through] - the `modelName` attribute of the through Model which
   *                                    must declare at least one foreign key to both source and
   *                                    target Models. If not supplied, Redux-Orm will autogenerate
   *                                    one.
   * @param  {string[]} [options.throughFields] - this must be supplied only when a custom through
   *                                            Model has more than one foreign key pointing to
   *                                            either the source or target mode. In this case
   *                                            Redux-ORM can't figure out the correct fields for
   *                                            you, you must provide them. The supplied array should
   *                                            have two elements that are the field names for the
   *                                            through fields you want to declare the many-to-many
   *                                            relationship with. The order doesn't matter;
   *                                            Redux-ORM will figure out which field points to
   *                                            the source Model and which to the target Model.
   * @param  {string} [options.relatedName] - the attribute used to access a QuerySet
   *                                          of source Models from target Model.
   * @return {ManyToMany}
   */
  declare export function many(options: {
    to: string,
    through?: string,
    throughFields: Array<string>,
    relatedName: string
  }): any;
  declare export function many(to: string, relatedName: string): any;

  /**
   * Defines a one-to-one relationship. In database terms, this is a foreign key with the
   * added restriction that only one entity can point to single target entity.
   *
   * The arguments are the same as with `fk`. If `relatedName` is not supplied,
   * the source model name in lowercase will be used. Note that with the one-to-one
   * relationship, the `relatedName` should be in singular, not plural.
   * @param  {string|boolean} toModelNameOrObj - the `modelName` property of
   *                                           the Model that is the target of the
   *                                           foreign key, or an object with properties
   *                                           `to` and optionally `relatedName`.
   * @param {string} [relatedName] - if you didn't pass an object as the first argument,
   *                                 this is the property name that will be used to
   *                                 access a Model the foreign key is defined from,
   *                                 from the target Model.
   * @return {OneToOne}
   */
  declare export function oneToOne(
    toModelNameOrObj:
      | string
      | {
          to: string,
          relatedName?: string
        },
    relatedName?: string
  ): any;

  declare export function createReducer(orm: ORM): any;
}
