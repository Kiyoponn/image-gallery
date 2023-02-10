import { createClient } from 'next-sanity'

const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
}

const client = createClient(clientConfig)

export default client
