module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * The content of an entry.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md#atom-json-media-type|GEDCOM X Atom JSON Spec}
   * @see {@link https://tools.ietf.org/html/rfc4287#section-4.1.3|RFC 4287}
   * 
   * @class AtomContent
   * @extends AtomCommon
   * @param {Object} [json]
   */
  var AtomContent = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomContent)){
      return new AtomContent(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomContent.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomContent.prototype = Object.create(AtomCommon.prototype);
  
  AtomContent._gedxClass = AtomContent.prototype._gedxClass = 'GedcomX.AtomContent';
  
  AtomContent.jsonProps = [
    'gedcomx'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomContent.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomContent} this
   */
  AtomContent.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setGedcomX(json.gedcomx);
    }
    return this;
  };
  
  /**
   * Set the GedcomX object
   * 
   * @param {GedcomX} gedcomx
   * @return {AtomContent} this
   */
  AtomContent.prototype.setGedcomX = function(gedcomx){
    if(gedcomx){
      this.gedcomx = GedcomX(gedcomx);
    }
    return this;
  };
  
  /**
   * Get the GedcomX object
   * 
   * @return {GedcomX}
   */
  AtomContent.prototype.getGedcomX = function(){
    return this.gedcomx;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomContent.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomContent.jsonProps);
  };
  
  GedcomX.AtomContent = AtomContent;

};