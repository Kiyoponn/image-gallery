import { groq } from 'next-sanity'

import { client } from '@/src/lib/sanity.client'
import { ImageDataType } from './Types'

const getAll = async () => {
  return await client.fetch<Array<ImageDataType>>(groq`
  *[_type == "gallery"] {
    _id,
    title,
    ratio,
    category,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }
`)
}

const getByCategory = async (category: string) => {
  return await client.fetch<Array<ImageDataType>>(groq`
  *[_type == "gallery" && category == "${category}"] {
    _id,
    title,
    ratio,
    category,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }
`)
}

export { getAll, getByCategory }
