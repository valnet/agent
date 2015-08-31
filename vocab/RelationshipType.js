module.exports = {
  id: 'RelationshipType',
  prefixes: require('./prefixes'),
  description: 'A type of relationship between multiple agents.',
  context: 'open:RelationshipType',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the type of agent relationship.',
      type: 'string',
      format: 'uri',
      required: true
    },
    description: {
      context: 'schema:description',
      description: 'A description of the type of agent relationship.',
      type: 'string'
    },
    obverse: {
      context: 'open:obverseRelationshipType',
      description: "The relationship type's associated obverse, if any.",
      $ref: 'RelationshipType'
    },
    source: {
      context: 'open:sourceAgentType',
      description: 'The type of source agent in the relationship',
      $ref: 'AgentType',
      required: true
    },
    target: {
      context: 'open:targetAgentType',
      description: 'The type of target agent in the relationship',
      $ref: 'AgentType',
      required: true
    },
    context: {
      context: 'open:contextAgentType',
      description: 'The type of context agent in the relationship',
      $ref: 'AgentType'
    }
  }
}