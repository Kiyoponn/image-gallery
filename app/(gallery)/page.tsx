import { previewData } from 'next/headers'

import { Spinner } from '@/components/Icons'
import ImageGrid from '@/components/ImageGrid'
import PreviewGallery from '@/components/sanity/PreviewGallery'
import PreviewSuspense from '@/components/sanity/PreviewSuspense'
import { getAll } from '@/utils/Groq'
import Loading from './loading'

export default async function GalleryPage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewGallery />
      </PreviewSuspense>
    )
  }

  const data = await getAll()
  return <ImageGrid data={data} />
}
