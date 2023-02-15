// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/src/lib/sanity.client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

function getImagesQuery() {
  return client.fetch(groq`
    *[_type == "gallery"]`)
}

export default async function GET(_: NextApiRequest, res: NextApiResponse) {
  const images = await getImagesQuery()
  res.status(200).json(images)
}
