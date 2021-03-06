var utils = require('../utils'),
    Base = require('../Base');

/**
 * Qualifiers are used to supply additional details about a piece of data.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#qualifier|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends Base
 * @param {Object} [json]
 */
var Qualifier = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Qualifier)){
    return new Qualifier(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Qualifier.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Qualifier.prototype = Object.create(Base.prototype);

Qualifier._gedxClass = Qualifier.prototype._gedxClass = 'GedcomX.Qualifier';

Qualifier.jsonProps = [
  'name',
  'value'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Qualifier.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Qualifier} this
 */
Qualifier.prototype.init = function(json){
  
  Base.prototype.init.call(this, json);
  
  if(json){
    this.setName(json.name);
    this.setValue(json.value);
  }
  return this;
};

/**
 * Get the name
 * 
 * @returns {String} name
 */
Qualifier.prototype.getName = function(){
  return this.name;
};

/**
 * Set the name
 * 
 * @param {String} name
 * @returns {Qualifier} This instance.
 */
Qualifier.prototype.setName = function(name){
  this.name = name;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
Qualifier.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {Qualifier} This instance.
 */
Qualifier.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Qualifier.prototype.toJSON = function(){
  return this._toJSON(Base, Qualifier.jsonProps);
};

module.exports = Qualifier;