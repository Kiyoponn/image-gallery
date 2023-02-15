'use client'

import { groq } from 'next-sanity'

import { usePreview } from '@/src/lib/sanity.preview'
import ImageGrid from '../ImageGrid'
import ExitPreviewButton from './ExitPreview'

export default function PreviewCategory({ category }: { category: string }) {
  const query = groq`*[_type == "gallery" && category == "${category}"] {
    _id,
      title,
      ratio,
      category,
      "imageUrl": image.asset->url,
      "alt": image.alt
  }`

  const data = usePreview(null, query)

  return (
    <>
      <ImageGrid data={data} />
      <ExitPreviewButton />
    </>
  )
}
