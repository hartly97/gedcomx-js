var Conclusion = require('./Conclusion'),
    Attribution = require('./Attribution');

/**
 * A textual document
 * 
 * @constructor
 * @param {Object} [json]
 */
var Document = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Document)){
    return new Document(json);
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setExtracted(json.extracted);
    this.setTextType(json.textType);
    this.setText(json.text);
    this.setAttribution(json.attribution);
  }
};

Document.prototype = Object.create(Conclusion.prototype);

/**
 * Get the type
 * 
 * @returns {String}
 */
Document.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {Document}
 */
Document.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the extracted flag
 * 
 * @returns {Boolean} extracted
 */
Document.prototype.getExtracted = function(){
  
  // Spec says it defaults to false so we force undefined to become false
  return !!this.extracted;
};

/**
 * Set the extracted flag
 * 
 * @param {Boolean} extracted
 * @returns {Document}
 */
Document.prototype.setExtracted = function(extracted){
  this.extracted = !!extracted;
  return this;
};

/**
 * Get the text type
 * 
 * @returns {String}
 */
Document.prototype.getTextType = function(){
  return this.textType;
};

/**
 * Set the text type
 * 
 * @param {String} textType
 * @returns {Document}
 */
Document.prototype.setTextType = function(textType){
  this.textType = textType;
  return this;
};

/**
 * Get the text
 * 
 * @returns {String}
 */
Document.prototype.getText = function(){
  return this.text;
};

/**
 * Set the text
 * 
 * @param {String} text
 * @returns {Document}
 */
Document.prototype.setText = function(text){
  this.text = text;
  return this;
};

/**
 * Get the attribution
 * 
 * @returns {Attribution}
 */
Document.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Attribution} attribution
 * @returns {Document}
 */
Document.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Document.prototype.toJSON = function(){
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(typeof this.extracted === 'boolean'){
    json.extracted = this.extracted;
  }
  
  if(this.textType){
    json.textType = this.textType;
  }
  
  if(this.text){
    json.text = this.text;
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  return json;
};

module.exports = Document;