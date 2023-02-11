// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/lib/sanity.client'
import { ImageDataType } from '@/utils/Types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

function getImagesQuery() {
  return client.fetch(groq`
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

export default async function GET(_: NextApiRequest, res: NextApiResponse) {
  const images: Array<ImageDataType> = await getImagesQuery()
  res.status(200).json(images)
}
