import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './lib/sanity.api'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
