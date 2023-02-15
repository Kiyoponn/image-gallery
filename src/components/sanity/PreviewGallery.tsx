'use client'

import { groq } from 'next-sanity'

import { usePreview } from '@/src/lib/sanity.preview'
import ImageGrid from '../ImageGrid'
import ExitPreviewButton from './ExitPreview'

export default function PreviewGallery() {
  const query = groq`*[_type == "gallery"] {
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
