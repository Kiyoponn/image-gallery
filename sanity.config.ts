import { deskTool } from 'sanity/desk'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { schemaTypes } from './schemas/index'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  title: 'Image Gallery',
  basePath: '/admin',
  plugins: [deskTool(), vercelDeployTool()],
  schema: {
    types: schemaTypes,
  },
}
