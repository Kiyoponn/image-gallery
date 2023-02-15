import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from '@/schemas/index'
import { dataset, projectId } from '@/src/lib/sanity.api'
import { galleryTheme } from '@/src/lib/sanity.theme'

export default defineConfig({
  basePath: '/admin',

  name: 'image-gallery',
  title: 'Image Gallery',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  theme: galleryTheme,

  plugins: [deskTool(), visionTool()],
})
