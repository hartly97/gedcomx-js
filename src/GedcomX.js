var Person = require('./Person'),
    Relationship = require('./Relationship'),
    SourceDescription = require('./SourceDescription'),
    Agent = require('./Agent');

/**
 * A GEDCOM X document.
 * 
 * @constructor
 * @param {Object} [json]
 */
var GedcomX = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof GedcomX)){
    return new GedcomX(json);
  }
  
  if(json){
    this.setPersons(json.persons);
    this.setRelationships(json.relationships);
    this.setSourceDescriptions(json.sourceDescriptions);
    this.setAgents(json.agents);
  }
  
};

/**
 * Get the persons
 * 
 * @returns {Person[]}
 */
GedcomX.prototype.getPersons = function(){
  return this.persons || [];
};

/**
 * Set the persons
 * 
 * @param {Person[]|Object[]} persons
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.setPersons = function(persons){
  if(Array.isArray(persons)){
    var gedx = this;
    gedx.persons = [];
    persons.forEach(function(p){
      gedx.addPerson(p);
    });
  }
  return this;
};

/**
 * Add a person
 * 
 * @param {Person|Object}
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.addPerson = function(person){
  if(person){
    if(!Array.isArray(this.persons)){
      this.persons = [];
    }
    this.persons.push(Person(person));
  }
  return this;
};

/**
 * Get the relationships
 * 
 * @returns {Relationship[]}
 */
GedcomX.prototype.getRelationships = function(){
  return this.relationships || [];
};

/**
 * Set the relationships
 * 
 * @param {Relationship[]|Object[]} relationships
 * @returns {GedcomX}
 */
GedcomX.prototype.setRelationships = function(relationships){
  if(Array.isArray(relationships)){
    var gedx = this;
    gedx.relationships = [];
    relationships.forEach(function(r){
      gedx.addRelationship(r);
    });
  }
  return this;
};

/**
 * Add a relationship
 * 
 * @param {Relationship|Object} relationship
 * @returns {GedcomX}
 */
GedcomX.prototype.addRelationship = function(relationship){
  if(relationship){
    if(!Array.isArray(this.relationships)){
      this.relationships = [];
    }
    this.relationships.push(Relationship(relationship));
  }
  return this;
};

/**
 * Get the source descriptions
 * 
 * @returns {SourceDescription[]}
 */
GedcomX.prototype.getSourceDescriptions = function(){
  return this.sourceDescriptions || [];
};

/**
 * Set the source descriptions
 * 
 * @param {SourceDescription[]|Object[]} sourceDescriptions
 * @returns {GedcomX}
 */
GedcomX.prototype.setSourceDescriptions = function(sourceDescriptions){
  if(Array.isArray(sourceDescriptions)){
    var gedx = this;
    gedx.sourceDescriptions = [];
    sourceDescriptions.forEach(function(s){
      gedx.addSourceDescription(s);
    });
  }
  return this;
};

/**
 * Add a ource description
 * 
 * @param {SourceDescription|Object} sourceDescription
 * @returns {GedcomX}
 */
GedcomX.prototype.addSourceDescription = function(sourceDescription){
  if(sourceDescription){
    if(!Array.isArray(this.sourceDescriptions)){
      this.sourceDescriptions = [];
    }
    this.sourceDescriptions.push(SourceDescription(sourceDescription));
  }
  return this;
};

/**
 * Get the agents
 * 
 * @returns {Agent[]}
 */
GedcomX.prototype.getAgents = function(){
  return this.agents || [];
};

/**
 * Set the agents
 * 
 * @param {Agent[]|Object[]} agents
 * @returns {GedcomX}
 */
GedcomX.prototype.setAgents = function(agents){
  if(Array.isArray(agents)){
    var gedx = this;
    gedx.agents = [];
    agents.forEach(function(a){
      gedx.addAgent(a);
    });
  }
  return this;
};

/**
 * Add an agent
 * 
 * @param {Agent|Object}
 * @returns {GedcomX}
 */
GedcomX.prototype.addAgent = function(agent){
  if(agent){
    if(!Array.isArray(this.agents)){
      this.agents = [];
    }
    this.agents.push(Agent(agent));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
GedcomX.prototype.toJSON = function(){
  var json = {};
  
  if(this.persons){
    json.persons = this.persons.map(function(p){
      return p.toJSON();
    });
  }
  
  if(this.relationships){
    json.relationships = this.relationships.map(function(r){
      return r.toJSON();
    });
  }
  
  if(this.sourceDescriptions){
    json.sourceDescriptions = this.sourceDescriptions.map(function(s){
      return s.toJSON();
    });
  }
  
  if(this.agents){
    json.agents = this.agents.map(function(a){
      return a.toJSON();
    });
  }
  
  return json;
};

// Expose all classes
GedcomX.Address = require('./Address');
GedcomX.Agent = Agent;
GedcomX.Attribution = require('./Attribution');
GedcomX.Conclusion = require('./Conclusion');
GedcomX.Coverage = require('./Coverage');
GedcomX.Date = require('./Date');
GedcomX.EventRole = require('./EventRole');
GedcomX.EvidenceReference = require('./EvidenceReference');
GedcomX.ExtensibleData = require('./ExtensibleData');
GedcomX.Fact = require('./Fact');
GedcomX.Gender = require('./Gender');
GedcomX.Identifiers = require('./Identifiers');
GedcomX.Name = require('./Name');
GedcomX.NameForm = require('./NameForm');
GedcomX.NamePart = require('./NamePart');
GedcomX.Note = require('./Note');
GedcomX.OnlineAccount = require('./OnlineAccount');
GedcomX.Person = Person;
GedcomX.PlaceReference = require('./PlaceReference');
GedcomX.Qualifier = require('./Qualifier');
GedcomX.Relationship = Relationship;
GedcomX.ResourceReference = require('./ResourceReference');
GedcomX.SourceCitation = require('./SourceCitation');
GedcomX.SourceDescription = SourceDescription;
GedcomX.SourceReference = require('./SourceReference');
GedcomX.Subject = require('./Subject');
GedcomX.TextValue = require('./TextValue');

module.exports = GedcomX;