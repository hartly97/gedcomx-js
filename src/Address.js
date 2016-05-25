var ExtensibleData = require('./ExtensibleData');

/**
 * An address.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Address = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Address)){
    return new Address(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setValue(json.value);
    this.setCity(json.city);
    this.setCountry(json.country);
    this.setPostalCode(json.postalCode);
    this.setStateOrProvince(json.stateOrProvince);
    this.setStreet(json.street);
    this.setStreet2(json.street2);
    this.setStreet3(json.street3);
    this.setStreet4(json.street4);
    this.setStreet5(json.street5);
    this.setStreet6(json.street6);
  }
};

Address.prototype = Object.create(ExtensibleData.prototype);

/**
 * Get the complete address value
 * 
 * @returns {String}
 */
Address.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the complete address value
 * 
 * @param {String} value
 * @return {Address}
 */
Address.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Get the city
 * 
 * @returns {String}
 */
Address.prototype.getCity = function(){
  return this.city;
};

/**
 * Set the city
 * 
 * @param {String} city
 * @returns {Address}
 */
Address.prototype.setCity = function(city){
  this.city = city;
  return this;
};

/**
 * Get the country
 * 
 * @returns {String}
 */
Address.prototype.getCountry = function(){
  return this.country;
};

/**
 * Set the country
 * 
 * @param {String} country
 * @returns {Address}
 */
Address.prototype.setCountry = function(country){
  this.country = country;
  return this;
};

/**
 * Get the postal code
 * 
 * @returns {String}
 */
Address.prototype.getPostalCode = function(){
  return this.postalCode;
};

/**
 * Set the postal code
 * 
 * @param {String} postalCode
 * @returns {Address}
 */
Address.prototype.setPostalCode = function(postalCode){
  this.postalCode = postalCode;
  return this;
};

/**
 * Get the state or province
 * 
 * @returns {String}
 */
Address.prototype.getStateOrProvince = function(){
  return this.stateOrProvince;
};

/**
 * Set the state or province
 * 
 * @param {String} stateOrProvince
 * @returns {Address}
 */
Address.prototype.setStateOrProvince = function(stateOrProvince){
  this.stateOrProvince = stateOrProvince;
  return this;
};

/**
 * Get the street
 * 
 * @returns {String}
 */
Address.prototype.getStreet = function(){
  return this.street;
};

/**
 * Set the street
 * 
 * @param {String} street
 * @returns {Address}
 */
Address.prototype.setStreet = function(street){
  this.street = street;
  return this;
};

/**
 * Get the street2
 * 
 * @returns {String}
 */
Address.prototype.getStreet2 = function(){
  return this.street2;
};

/**
 * Set the street2
 * 
 * @param {String} street2
 * @returns {Address}
 */
Address.prototype.setStreet2 = function(street2){
  this.street2 = street2;
  return this;
};

/**
 * Get the street3
 * 
 * @returns {String}
 */
Address.prototype.getStreet3 = function(){
  return this.street3;
};

/**
 * Set the street3
 * 
 * @param {String} street3
 * @returns {Address}
 */
Address.prototype.setStreet3 = function(street3){
  this.street3 = street3;
  return this;
};

/**
 * Get the street4
 * 
 * @returns {String}
 */
Address.prototype.getStreet4 = function(){
  return this.street4;
};

/**
 * Set the street4
 * 
 * @param {String} street4
 * @returns {Address}
 */
Address.prototype.setStreet4 = function(street4){
  this.street4 = street4;
  return this;
};

/**
 * Get the street5
 * 
 * @returns {String}
 */
Address.prototype.getStreet5 = function(){
  return this.street5;
};

/**
 * Set the street5
 * 
 * @param {String} street5
 * @returns {Address}
 */
Address.prototype.setStreet5 = function(street5){
  this.street5 = street5;
  return this;
};

/**
 * Get the street6
 * 
 * @returns {String}
 */
Address.prototype.getStreet6 = function(){
  return this.street6;
};

/**
 * Set the street6
 * 
 * @param {String} street6
 * @returns {Address}
 */
Address.prototype.setStreet6 = function(street6){
  this.street6 = street6;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Address.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.value){
    json.value = this.value;
  }
  
  if(this.city){
    json.city = this.city;
  }
  
  if(this.country){
    json.country = this.country;
  }
  
  if(this.postalCode){
    json.postalCode = this.postalCode;
  }
  
  if(this.stateOrProvince){
    json.stateOrProvince = this.stateOrProvince;
  }
  
  if(this.street){
    json.street = this.street;
  }
  
  if(this.street2){
    json.street2 = this.street2;
  }
  
  if(this.street3){
    json.street3 = this.street3;
  }
  
  if(this.street4){
    json.street4 = this.street4;
  }
  
  if(this.street5){
    json.street5 = this.street5;
  }
  
  if(this.street6){
    json.street6 = this.street6;
  }
  
  return json;
};

module.exports = Address;