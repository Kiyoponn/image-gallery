import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { dataset, projectId } from '@/lib/sanity.api'
import { galleryTheme } from '@/lib/sanity.theme'
import { schemaTypes } from '@/schemas/index'

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
