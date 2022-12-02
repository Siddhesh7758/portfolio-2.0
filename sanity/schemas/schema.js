// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageInfo from './pageInfo'
import social from './social'
import skill from './skill'
import project from './project'



export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([ pageInfo, social, skill, project, ]),
})
