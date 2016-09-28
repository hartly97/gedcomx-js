var GedcomX = require('./GedcomX'),
    utils = require('./utils');

/**
 * A description of the spatial and temporal coverage of a resource.
 * 
 * @constructor
 * @apram {Object} [json]
 */
var Coverage = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Coverage)){
    return new Coverage(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Coverage.isInstance(json)){
    return json;
  }
  
  GedcomX.ExtensibleData.call(this, json);
  
  if(json){
    this.setSpatial(json.spatial);
    this.setTemporal(json.temporal);
  }
};

Coverage.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Coverage._gedxClass = Coverage.prototype._gedxClass = 'GedcomX.Coverage';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Coverage.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the spatial coverage
 * 
 * @returns {PlaceReference}
 */
Coverage.prototype.getSpatial = function(){
  return this.spatial;
};

/**
 * Set the spatial coverage
 * 
 * @param {PlaceReference} spatial
 * @returns {Coverage}
 */
Coverage.prototype.setSpatial = function(spatial){
  if(spatial){
    this.spatial = GedcomX.PlaceReference(spatial);
  }
  return this;
};

/**
 * Get the temporal coverage
 * 
 * @returns {Date}
 */
Coverage.prototype.getTemporal = function(){
  return this.temporal;
};

/**
 * Set the temporal coverage
 * 
 * @param {Date} temporal
 * @returns {Coverage}
 */
Coverage.prototype.setTemporal = function(temporal){
  if(temporal){
    this.temporal = GedcomX.Date(temporal);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Coverage.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, [
    'spatial',
    'temporal'
  ]);
};

module.exports = Coverage;