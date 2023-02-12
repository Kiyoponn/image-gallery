import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { apiVersion, dataset, projectId } from '@/lib/sanity.api'
import { schemaTypes } from '@/schemas/index'
import { galleryTheme } from '@/lib/sanity.theme'

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
