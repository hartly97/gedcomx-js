var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A part of a name.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#name-part|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var NamePart = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof NamePart)){
    return new NamePart(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(NamePart.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

NamePart.prototype = Object.create(GedcomX.ExtensibleData.prototype);

NamePart._gedxClass = NamePart.prototype._gedxClass = 'GedcomX.NamePart';

NamePart.jsonProps = [
  'type',
  'value',
  'qualifiers'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
NamePart.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {NamePart} this
 */
NamePart.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setValue(json.value);
    this.setType(json.type);
    this.setQualifiers(json.qualifiers);
  }
  return this;
};

/**
 * Get the type
 * 
 * @returns {String} type
 */
NamePart.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {NamePart} This instance
 */
NamePart.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
NamePart.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {NamePart} This instance
 */
NamePart.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Get qualifiers
 * 
 * @return {Qualifer[]}
 */
NamePart.prototype.getQualifiers = function(){
  return this.qualifiers || [];
};

/**
 * Set the qualifiers
 * 
 * @param {Qualifer[]|Object[]} qualifiers
 * @returns {NamePart} This instance
 */
NamePart.prototype.setQualifiers = function(qualifiers){
  return this._setArray(qualifiers, 'qualifiers', 'addQualifier');
};

/**
 * Add a qualifier
 * 
 * @param {Qualifier|Object} qualifier
 * @returns {NamePart} This instance
 */
NamePart.prototype.addQualifier = function(qualifier){
  return this._arrayPush(qualifier, 'qualifiers', GedcomX.Qualifier);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
NamePart.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, NamePart.jsonProps);
};

module.exports = NamePart;