import { deskTool } from 'sanity/desk'
import { defineConfig } from 'sanity'

import { schemaTypes } from './schemas/index'
import { dataset, projectId } from './lib/sanity.api'

export default defineConfig({
  name: 'default',
  title: 'Image Gallery',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool()],
})
