import { createClient } from 'next-sanity'

const clientConfig = {
  projectId: '3rofbwkx',
  dataset: 'production',
  useCdn: false,
}

const client = createClient(clientConfig)

export default client
