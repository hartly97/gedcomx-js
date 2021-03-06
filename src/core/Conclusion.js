var GedcomX = require('../'),
    utils = require('../utils');

/**
 * An abstract concept for a basic genealogical data item.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#conclusion|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var Conclusion = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Conclusion)){
    return new Conclusion(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Conclusion.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Conclusion.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Conclusion._gedxClass = Conclusion.prototype._gedxClass = 'GedcomX.Conclusion';

Conclusion.jsonProps = [
  'lang',
  'confidence',
  'analysis',
  'attribution',
  'sources',
  'notes'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Conclusion.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Conclusion} this
 */
Conclusion.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setAttribution(json.attribution);
    this.setAnalysis(json.analysis);
    this.setConfidence(json.confidence);
    this.setLang(json.lang);
    this.setNotes(json.notes);
    this.setSources(json.sources);
  }
  return this;
};

/**
 * Get the attribution.
 * 
 * @returns {Attribution}
 */
Conclusion.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Object|Attribution} attribution
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = new GedcomX.Attribution(attribution);
  }
  return this;
};

/**
 * Get analysis.
 * 
 * @returns {ResourceReference} analysis
 */
Conclusion.prototype.getAnalysis = function(){
  return this.analysis;
};

/**
 * Set the analysis
 * 
 * @param {Object|ResourceReference} analysis
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setAnalysis = function(analysis){
  if(analysis){
    this.analysis = new GedcomX.ResourceReference(analysis);
  }
  return this;
};

/**
 * Get the confidence.
 * 
 * @returns {String} confidence
 */
Conclusion.prototype.getConfidence = function(){
  return this.confidence;
};

/**
 * Set the confidence.
 * 
 * @param {String} confidence
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setConfidence = function(confidence){
  this.confidence = confidence;
  return this;
};

/**
 * Get the language identifier.
 * 
 * @returns {String} lang
 */
Conclusion.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the language identifier.
 * 
 * @param {String} lang
 * @returns {Conclusion} This instance.
 */
Conclusion.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the notes
 * 
 * @returns {Note[]} notes
 */
Conclusion.prototype.getNotes = function(){
  return this.notes || [];
};

/**
 * Set the notes
 * 
 * @param {Object[]|Note[]} notes
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setNotes = function(notes){
  return this._setArray(notes, 'notes', 'addNote');
};

/**
 * Add a note
 * 
 * @param {Object|Note} note
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.addNote = function(note){
  return this._arrayPush(note, 'notes', GedcomX.Note);
};

/**
 * Get the sources
 * 
 * @returns {SourceReference[]}
 */
Conclusion.prototype.getSources = function(){
  return this.sources || [];
};

/**
 * Set the sources
 * 
 * @param {Object[]|SourceReference[]} sources
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setSources = function(sources){
  return this._setArray(sources, 'sources', 'addSource');
};

/**
 * Add a source
 * 
 * @param {SourceReference} source
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.addSource = function(source){
  return this._arrayPush(source, 'sources', GedcomX.SourceReference);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Conclusion.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, Conclusion.jsonProps);
};

module.exports = Conclusion;