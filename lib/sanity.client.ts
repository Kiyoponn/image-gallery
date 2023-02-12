import { createClient } from 'next-sanity'
import { cache } from 'react'
import { dataset, projectId } from './sanity.api'

const clientConfig = {
  projectId,
  dataset,
  useCdn: false,
}

const client = createClient(clientConfig)

const cachedClient = cache(client.fetch.bind(client))

export { client, cachedClient }
