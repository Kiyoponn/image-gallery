import { createClient } from 'next-sanity'
import { cache } from 'react'
import { apiVersion, dataset, projectId } from './sanity.api'

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
}

const client = createClient(clientConfig)

const cachedClient = cache(client.fetch.bind(client))

export { client, cachedClient }
